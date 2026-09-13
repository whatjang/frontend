import { ClipLoader } from "react-spinners";

interface SpinnerProps {
  size?: number;
}

export default function Spinner({ size = 25 }: SpinnerProps) {
  return <ClipLoader color="var(--color-green)" size={size} />;
}
