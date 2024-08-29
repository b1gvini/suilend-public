import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import BigNumber from "bignumber.js";

import { SDK_ENV, SdkEnv } from "@suilend/sdk/constants";

import { useAppContext } from "@/contexts/AppContext";
import { useWalletContext } from "@/contexts/WalletContext";
import { API_URL } from "@/lib/navigation";
import { getPointsStats } from "@/lib/points";

export interface LeaderboardRowData {
  rank: number;
  address: string;
  pointsPerDay: BigNumber;
  totalPoints: BigNumber;
}

interface PointsContext {
  leaderboardRows?: LeaderboardRowData[];
  updatedAt?: Date;
  rank?: number | null;
}

const defaultContextValue: PointsContext = {
  leaderboardRows: undefined,
  updatedAt: undefined,
  rank: undefined,
};

const PointsContext = createContext<PointsContext>(defaultContextValue);

export const usePointsContext = () => useContext(PointsContext);

export function PointsContextProvider({ children }: PropsWithChildren) {
  const { address } = useWalletContext();
  const { data } = useAppContext();

  // Obligations
  const [leaderboardRows, setLeaderboardRows] = useState<
    PointsContext["leaderboardRows"]
  >(defaultContextValue["leaderboardRows"]);
  const [updatedAt, setUpdatedAt] = useState<PointsContext["updatedAt"]>(
    defaultContextValue["updatedAt"],
  );

  const isFetchingLeaderboardRowsRef = useRef<boolean>(false);
  useEffect(() => {
    (async () => {
      if ((SDK_ENV as SdkEnv) === SdkEnv.BETA) {
        if (data === null) return;

        const pointsStats = getPointsStats(data.rewardMap, data.obligations);
        const sortedRows = [];

        if (address)
          sortedRows.push({
            address,
            totalPoints: pointsStats.totalPoints.total,
            pointsPerDay: pointsStats.pointsPerDay.total,
            rank: 1,
          });

        setLeaderboardRows(sortedRows);
        setUpdatedAt(new Date());
        return;
      } else {
        if (isFetchingLeaderboardRowsRef.current) return;

        isFetchingLeaderboardRowsRef.current = true;
        try {
          const url = `${API_URL}/points/leaderboard`;
          const res = await fetch(url);
          const json = await res.json();

          setLeaderboardRows(
            json.rows.map((row: any) => ({
              rank: row.rank,
              address: row.address,
              pointsPerDay: new BigNumber(row.pointsPerDay),
              totalPoints: new BigNumber(row.totalPoints),
            })),
          );
          setUpdatedAt(new Date(json.updatedAt * 1000));
        } catch (err) {
          console.error(err);
        }
      }
    })();
  }, []);

  // Rank
  const [rank, setRank] = useState<PointsContext["rank"]>(
    defaultContextValue["rank"],
  );

  useEffect(() => {
    if (!address || leaderboardRows === undefined) {
      setRank(undefined);
      return;
    }

    const row = leaderboardRows.find((row) => row.address === address);
    if (row === undefined) {
      setRank(null);
      return;
    }

    setRank(row.rank);
  }, [address, leaderboardRows]);

  // Context
  const contextValue: PointsContext = useMemo(
    () => ({
      leaderboardRows,
      updatedAt,
      rank,
    }),
    [leaderboardRows, updatedAt, rank],
  );

  return (
    <PointsContext.Provider value={contextValue}>
      {children}
    </PointsContext.Provider>
  );
}
