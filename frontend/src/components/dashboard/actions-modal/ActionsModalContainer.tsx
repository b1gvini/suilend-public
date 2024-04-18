import {
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  useRef,
  useState,
} from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { useActionsModalContext } from "@/components/dashboard/actions-modal/ActionsModalContext";
import Button from "@/components/shared/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DrawerContent,
  Drawer as DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useBreakpoint from "@/hooks/useBreakpoint";

interface ActionsModalContainerProps extends PropsWithChildren {
  trigger: ReactNode;
}

export default function ActionsModalContainer({
  trigger,
  children,
}: ActionsModalContainerProps) {
  const { isMoreParametersOpen, setIsMoreParametersOpen } =
    useActionsModalContext();
  const MoreParametersIcon = isMoreParametersOpen ? ChevronLeft : ChevronRight;

  const { md } = useBreakpoint();

  // Open
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = (value: boolean) => {
    if (value) setIsOpen(true);
  };

  // Dialog events
  const didDialogContentMouseDownRef = useRef<boolean>(false);
  const onDialogContentMouseDown = () => {
    didDialogContentMouseDownRef.current = true;
  };
  const onDialogContentMouseUp = () => {
    if (didDialogContentMouseDownRef.current) {
      setIsOpen(false);
      didDialogContentMouseDownRef.current = false;
    }
  };

  const onDialogInnerContentMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    didDialogContentMouseDownRef.current = false;
  };
  const onDialogInnerContentMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    didDialogContentMouseDownRef.current = false;
  };

  if (md) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogTrigger asChild className="appearance-none">
          {trigger}
        </DialogTrigger>
        <DialogContent
          className="grid h-dvh max-w-none place-items-center overflow-auto border-none bg-transparent p-0 px-10 py-8"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onEscapeKeyDown={() => setIsOpen(false)}
          overlay={{
            className: "bg-background/80",
            onClick: () => setIsOpen(false),
          }}
          showCloseButton={false}
          onMouseDown={onDialogContentMouseDown}
          onMouseUp={onDialogContentMouseUp}
        >
          <div
            className="relative h-fit rounded-lg border bg-popover p-4"
            onMouseDown={onDialogInnerContentMouseDown}
            onMouseUp={onDialogInnerContentMouseUp}
          >
            {/* More parameters */}
            <div
              className="absolute right-[-41px] top-1/2 -translate-y-2/4 rounded-r-md bg-popover"
              style={{ writingMode: "vertical-rl" }}
            >
              <Button
                className="h-fit w-10 rounded-l-none rounded-r-md px-0 py-3"
                labelClassName="uppercase"
                endIcon={<MoreParametersIcon className="h-4 w-4" />}
                variant="secondary"
                onClick={() => setIsMoreParametersOpen((o) => !o)}
              >
                {isMoreParametersOpen ? "Hide" : "Show"} more parameters
              </Button>
            </div>

            {children}
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <DrawerRoot
      open={isOpen}
      onOpenChange={onOpenChange}
      onRelease={(e, open) => setIsOpen(open)}
    >
      <DrawerTrigger asChild className="appearance-none">
        {trigger}
      </DrawerTrigger>
      <DrawerContent
        className="mt-[0] max-h-[calc(100dvh_-0)] rounded-t-lg bg-popover px-4 py-4"
        thumbClassName="hidden"
        onEscapeKeyDown={() => setIsOpen(false)}
        overlay={{
          className: "bg-background/80",
          onClick: () => setIsOpen(false),
        }}
        style={{
          height: isMoreParametersOpen ? "calc(100dvh - 0)" : "auto",
        }}
      >
        {children}
      </DrawerContent>
    </DrawerRoot>
  );
}