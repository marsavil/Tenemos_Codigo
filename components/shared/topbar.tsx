import Image from "next/image";
import Link from "next/link";

const home = process.env.NEXT_PUBLIC_HOME;
export default function Topbar() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-blue-950 p-2 rounded-lg">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ">
        Aprende a programar con tus horarios
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <Link
          className="pointer-events-none flex place-items-center gap-2  lg:pointer-events-auto lg:p-0"
          href={home}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Tenemos codigo.png"
            alt="Logo"
            width={200}
            height={100}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
//INICIAL
