"use client";
import Timeago from "react-timeago";

type Props = {
  time: string;
};

function LiveTampstamp({ time }: Props) {
  return <Timeago date={time} />;
}

export default LiveTampstamp;
