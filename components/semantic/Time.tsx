import { ukDateFormat } from "../../lib/formats";

const Time = ({ dateTime: date }: { dateTime: Date }) => (
  <time dateTime={date.toISOString()}>{ukDateFormat.format(date)}</time>
);

export default Time;
