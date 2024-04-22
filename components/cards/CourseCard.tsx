import Image from "next/image";
import { cursos } from "@/constants/index";
import Link from "next/link";

const home = process.env.NEXT_PUBLIC_HOME;
export default function CoursesCards() {
  return (
    <div className="flex flex-col gap-5 md:mb-5 lg:mb-0">
      {cursos.map((curso, index) => {
        // Obtener el número total de cursos
        const totalCursos = cursos.length;
        // Verificar si es el último curso en el array
        const isUltimoCurso = index === totalCursos - 1;

        return (
          <Link
            key={index}
            href={`${home}${curso.id}`}
            className={`flex justify-between flex-col md:flex-row align-middle gap-5 group rounded-lg border border-solid-white px-5 py-4 transition-colors hover:border-gray-300 hover: cursor-pointer hover:bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-blue-600 ${isUltimoCurso ? 'mb-40' : ''}`}
          >
            <div className="basis-1/2">
              <Image
                src={curso.image}
                width={250}
                height={250}
                alt={curso.name}
                className="shadow-md shadow-slate-500 rounded-md"
              />
            </div>

            <div className="flex flex-col w-50 gap-5 justify-center">
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {curso.name}
              </p>
              <p>{curso.short}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
