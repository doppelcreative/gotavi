import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";


export default function Button({text, url}) {
  return (
    <Link
      href={`${url}`}
      className="pp-theme-btn w-fit wow fadeInUp flex gap-3"
      data-wow-delay=".5s"
    >
      <span>{text}</span> <FaLongArrowAltRight />
    </Link>
  );
}
