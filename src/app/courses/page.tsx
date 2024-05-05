import Hero from "./components/Hero/Hero";
import NewCourses from "./components/NewCourses/NewCourses";

export default function Home() {
  return (
    <main className="w-full mx-auto overflow-hidden">
      <Hero />
      <div className="mb-[60rem] md:mb-[30rem] lg:mb-[20rem] xl:mb-0">
        <NewCourses />
      </div>
    </main>
  );
}
