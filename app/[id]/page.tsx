'use client'
import Topbar from "@/components/shared/topbar";
import { cursos } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Detail({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();
  const curso = cursos.find((curso) => curso.id === id);

  const handleClick = (url:string) => {
    router.push(url)
  }
  return (
    <main className="flex min-h-screen flex-col gap-5 items-center justify-between p-5">
      <Topbar />
      <div className="flex flex-col justify-center items-center gap-20 text-center lg:max-w-5xl lg:w-full lg:text-left">
        <h1 className="text-4xl font-semibold text-white">{curso?.name}</h1>
        <p className="font-thin">{curso?.description}</p>
        <Image src={curso?.full} width={500} height={500} alt={curso?.name} />
        <div>
          <ul className="list-disc list-inside">
            {curso?.advantages.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
        </div>
        <p>⚠️ IMPORTANTE ⚠️{"    "}{curso?.important}</p>
        <div>
          {curso?.mentor && (
            <section className="flex flex-col gap-5">
              <h2 className="text-2xl font-semibold">Sobre el autor</h2>
              <div className="flex flex-row items-center">
                <div>
                  <Image 
                    src={curso?.mentor.image}
                    width={600}
                    height={600}
                    alt={curso?.mentor.name}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="ml-5">{curso?.mentor.name}</p>
                  <p className="ml-8">{curso?.mentor.description}</p>
                </div>
              </div>
            </section>
          )}
        </div>
        <button 
          onClick={() => {handleClick(curso?.checkout)}}
          className="text-2xl"
        > 💰 C H E C K O U T </button>
        <Image
          src="/Tenemos codigo.svg"
          width={200}
          height={100}
          alt="Tenemos Código"
          className="lg:hidden"
        />
      </div>
    </main>
  );
}
