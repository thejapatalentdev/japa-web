import Image from "next/image";
import Learn from "@/assets/CoursesAssets/Learn.webp";

export default function Hero() {
  return (
    <section className="Jcontainer lg:mb-20 md:mb-10 relative w-full min-w-[100vw] ">
      <Image src={Learn} alt="Hero image" className="min-w-[100vw] bg-cover" />
    </section>
  );
}
