/** @jsx jsx **/

import { css, jsx } from "@emotion/core";
import { FC, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import useTheme from "../hooks/use-theme";

// https://codepen.io/seheekim/pen/BKYGZp

const Cylinder: FC<{ percentFilled: number }> = ({ percentFilled }) => {
  return (
    <div
      css={css`
        position: relative;
        overflow: hidden;
        height: 300px;
        background-color: rgba(160, 160, 160, 0.5);

        &,
        ::before,
        ::after {
          width: 100px;
          border-radius: 50px / 25px;
        }

        ::before,
        ::after {
          position: absolute;
          left: 0;
          top: 0;
          height: 50px;
          content: "";
        }

        ::before {
          background-color: rgba(160, 160, 160, 0.2);
        }

        ::after {
          background-color: rgba(160, 160, 160, 0.4);
        }
      `}
    >
      <div
        css={css`
          height: calc(250px * ${percentFilled});
          padding-top: 50px;
          background-color: rgba(0, 160, 160, 0.5);
          transition: 0.3s linear;

          &,
          ::before,
          ::after {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100px;
            border-radius: 50px / 25px;
          }

          ::before,
          ::after {
            height: 50px;
            content: "";
          }

          ::before {
            top: 0;
            background-color: rgba(0, 160, 160, 0.2);
          }

          ::after {
            background-color: rgba(0, 160, 160, 0.4);
          }
        `}
      />
    </div>
  );
};

const TimerTower: FC = () => {
  const mummySoundRef = useRef<HTMLAudioElement>(null);

  const [theme] = useTheme();

  const [timer, setTimer] = useState<null | NodeJS.Timer>(null);

  const [elapsed, setElapsed] = useState(0);
  const [end, setEnd] = useState(60);

  const percentFilled = elapsed / end;

  const handleInputChange: InputHTMLAttributes<
    HTMLInputElement
  >["onChange"] = event => {
    const endString = event.currentTarget.value;
    const endNum = parseInt(endString);

    if (isNaN(endNum)) {
      console.error(`Expected "end" to be a number, got "${endNum}" instead.`);

      return;
    }

    setEnd(endNum);
  };

  const handleInputClick: InputHTMLAttributes<
    HTMLInputElement
  >["onClick"] = event => event.currentTarget.select();

  const reset = () => {
    if (timer) clearInterval(timer);

    setElapsed(0);
    setTimer(null);
  };

  const playMummySound = () => {
    if (!mummySoundRef.current) {
      console.error("MummySoundError -- unable to load <audio /> reference.");
      return;
    }

    mummySoundRef.current.play();
  };

  const startTimer = () => {
    const _timer = setInterval(
      () =>
        setElapsed(prevElapsed => {
          const nextElapsed = prevElapsed + 1;

          if (nextElapsed === end) {
            console.log("CLEAR!");
            clearInterval(_timer);
            setTimer(null);
            playMummySound();
          }

          return nextElapsed;
        }),
      1000
    );

    setTimer(_timer);
  };

  const stopTimer = () => {
    if (timer) clearInterval(timer);

    setTimer(null);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <div
      css={css`
        margin: 1rem;
      `}
    >
      <Cylinder percentFilled={percentFilled} />
      <pre>
        {elapsed} /
        <input
          css={css`
            background-color: inherit;
            border: none;
            border-bottom: 1px dotted ${theme.colors.text};
            color: ${theme.colors.text};
            margin: 0 0.5rem;
            text-align: center;
            width: 24px;
          `}
          disabled={!!timer}
          onChange={handleInputChange}
          onClick={handleInputClick}
          type="text"
          value={end}
        />
        seconds
      </pre>
      <Button disabled={!!timer || elapsed === end} onClick={startTimer}>
        start
      </Button>
      <Button disabled={!timer} onClick={stopTimer}>
        stop
      </Button>
      <Button disabled={percentFilled === 0} onClick={reset}>
        reset
      </Button>
    </div>
  );
};

export default TimerTower;
