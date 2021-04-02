import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

// 日付表示フォーマットの整形
export default function Date({ dateString }: Props) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
