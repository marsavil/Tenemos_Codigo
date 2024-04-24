import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sm-hidden ">
      <div className="flex flex-row gap-5 items-center">
        <div className="flex flex-row items-center">
          <p className="text-xs">Powered by</p>
          <Link href={"https://hotmart.com/"} target="blank">
            <Image
              src={"/Hotmart_logo.svg"}
              alt="Hotmart"
              width={90}
              height={100}
            />
          </Link>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <p className="text-xs">© 2024 Marsavil.</p>
          <Link href={"https://shrinkify-two.vercel.app/d8exf"} target="blank">
            <Image
              src={"/LinkedIn_icon.png"}
              alt="Linkedin Icon"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
