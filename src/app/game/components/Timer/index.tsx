import { useEffect, useRef, useState } from "react";
import { convertTime } from "@/app/libs";

interface TimerInterface {
  isStarted: boolean;
  isEnded: boolean;
  onEnd: (time: number) => void;
}

export const Timer = ({ isStarted, isEnded, onEnd }: TimerInterface) => {
  const [time, setTime] = useState(0);

  const timerTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isStarted && !isEnded) {
      timerTimeout.current = setTimeout(
        () => setTime((prev) => prev + 1000),
        1000
      );
    }
    if (!isStarted) setTime(0);
  }, [time, isStarted]);

  useEffect(() => {
    if (isEnded) {
      onEnd(time);
      clearTimeout(timerTimeout.current as NodeJS.Timeout);
    }
  }, [isEnded]);

  return <div>{convertTime(time)}</div>;
};
