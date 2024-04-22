import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sm-hidden">
      <div className="flex flex-row gap-5 items-center">
        <div className="flex flex-row gap-5 items-center">
          <p className="footer__copyright">© 2024 Marsavil.</p>
          <Link href={"https://shrinkify-two.vercel.app/d8exf"}>
            <Image
              src={"/LinkedIn_icon.png"}
              alt="Linkedin Icon"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <p>Powered by</p>
          <Link href={"https://hotmart.com/"}>
            <Image
              src={"/Hotmart_logo.svg"}
              alt="Hotmart"
              width={150}
              height={100}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
