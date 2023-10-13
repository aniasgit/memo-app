import { useEffect, useRef, useState } from "react";
import { convertTime } from "@/app/libs";
import { TimerStyled } from "./timer.styled";

interface TimerInterface {
  isStarted: boolean;
  isEnded: boolean;
  isPaused: boolean;
  onEnd: (time: number) => void;
}

export const Timer = ({
  isStarted,
  isPaused,
  isEnded,
  onEnd,
}: TimerInterface) => {
  const [time, setTime] = useState(0);

  const timerTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isStarted && !isEnded && !isPaused) {
      timerTimeout.current = setTimeout(
        () => setTime((prev) => prev + 1000),
        1000
      );
    }
    if (isPaused) {
      clearTimeout(timerTimeout.current as NodeJS.Timeout);
    }
    if (!isStarted) setTime(0);
  }, [time, isStarted, isPaused]);

  useEffect(() => {
    if (isEnded) {
      onEnd(time);
      clearTimeout(timerTimeout.current as NodeJS.Timeout);
    }
  }, [isEnded]);

  return <TimerStyled>{convertTime(time)}</TimerStyled>;
};
