import Image from "next/image";
import Link from "next/link";

const home = process.env.NEXT_PUBLIC_HOME;
export default function Topbar() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-blue-950 p-2 rounded-lg">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ">
        Aprende a programar con tus horarios
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center gap-5 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">

        <div className="lg:hidden items-center opacity-40">
          <div className="flex flex-row gap-7 items-center">
            <div className="flex flex-row items-center">
              <p className="text-xs">Powered by</p>
              <Link href={"https://hotmart.com/"} target="blank">
                <Image
                  src={"/Hotmart_logo.svg"}
                  alt="Hotmart"
                  width={90}
                  height={30}
                />
              </Link>
            </div>
            </div>
            </div>
            <Link
          className="flex place-items-center gap-2  lg:pointer-events-auto lg:p-0"
          href={home}
        >
          <Image
            src="/Tenemos codigo.png"
            alt="Logo"
            width={200}
            height={100}
            priority
          />
        </Link>
        <div className="lg:hidden items-center opacity-40">
          <div className="flex flex-row gap-7 items-center">
            <div className="flex flex-row gap-5 items-center">
              <p className="text-xs">© 2024 Marsavil.</p>
              <Link href={"https://shrinkify-two.vercel.app/d8exf"} target="blank">
                <Image
                  src={"/LinkedIn_icon.png"}
                  alt="Linkedin Icon"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//INICIAL
