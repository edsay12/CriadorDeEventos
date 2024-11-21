import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

function LogoGrande() {
  return (
    <Link
      href={"/"}
      className={`${font.className} flex flex-col items-center gap-5`}
    >
      <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
      <h1 className="leading-5 text-5xl">
        <div>
          Convit<span className="text-blue-500 ">3</span>{" "}
          Digital
        </div>
      </h1>
    </Link>
  );
}

export default LogoGrande;
