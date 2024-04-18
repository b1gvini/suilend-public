import React from "react";

import clsx from "clsx";

import StandardSelect from "@/components/shared/StandardSelect";
import { useAppContext } from "@/contexts/AppContext";
import { EXPLORERS } from "@/lib/constants";

interface ExplorerSelectProps {
  className?: clsx.ClassValue;
}

export default function ExplorerSelect({ className }: ExplorerSelectProps) {
  const { explorer, setExplorerId } = useAppContext();

  return (
    <StandardSelect
      className={className}
      items={EXPLORERS}
      selectedItemId={explorer.id}
      setValue={setExplorerId}
      title="Select Explorer"
    />
  );
}