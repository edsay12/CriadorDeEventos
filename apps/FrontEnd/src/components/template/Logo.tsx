import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

function Logo() {
  return (
    <Link href={"/"} className={`${font.className} flex items-center gap-2`}>
      <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
      <h1 className="leading-5 flex flex-col text-lg">
        <div>
          Convit<span className="text-blue-500 px-0">3</span>
        </div>
        <div>Digital</div>
      </h1>
    </Link>
  );
}

export default Logo;
