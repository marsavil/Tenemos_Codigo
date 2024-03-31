import CourseCard from "@/components/cards/CourseCard";
import Topbar from "@/components/shared/topbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5 items-center justify-between p-5">
      <Topbar />
      <div className="flex flex-col text-center lg:max-w-5xl lg:w-full lg:text-left mt-10 lg:mb-0 ">
        <CourseCard />
      </div>
    </main>
  );
}