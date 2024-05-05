import Image from "next/image";
import Outline from "../components/Outline/Outline1";
import Link from "next/link";

export default function ProductManagement() {
  return (
    <section className="Jcontainer flex flex-col lg:mb-40 mx-auto">
      <div className="gContainer mt-20 h-full">
        <div className="flex flex-[60] h-full flex-col gap-4">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-semibold mb-5">
            PRODUCT MANAGEMENT Certification
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mb-4">
            Embark on a comprehensive journey through the fundamental tools and
            techniques of Product Management with our Mastering Product
            Management Course. Over 8 weeks, spanning 14 interactive intensive
            sessions. In this program, you will gain understanding of users and
            market research, defining product strategy and vision, product
            discovery and validation, and many more. Join us on this
            transformative journey and unlock the door to a world of Product
            Management Insights and opportunities.
          </p>
          <p className="lg:text-lg md:text-lg sm:text-lg text-sm mb-2">
            Don&apos;miss this opportunity to become a proficient data analyst.
            Join us on this transformative journey and unlock the door to a
            world of data-driven insights and opportunities.
          </p>
          <p className="lg:text-xl md:text-xl sm:text-lg text-sm font-medium md-2">
            This program is powered by JAPA a community of over 1000 Africans
            passionate about upskilling and career advancement. Terms &
            Conditions Apply
          </p>

          <div className="border border-gray-200 shadow-sm p-12 mt-12 rounded-2xl">
            <h2 className="lg:text-3xl md:text-2xl s:text:xl text-lg">
              Requirements
            </h2>
            <ul className="lg:text-xl md:text-lg text-sm mt-6">
              <li className="mb-2">Baisic Computer literacy</li>
              <li className="mb-2">Typing Skills</li>
              <li className="mb-2">
                Beginner friendly - No prior knowledge needded{" "}
              </li>
              <li className="mb-2">
                Project Based Learning - Learn and build on the go
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#cbb1ef] w-full max-h-[900px] mt-4 developerImg lg:max-w-[30rem] lg:flex-[20] xl:lg:flex-[20] p-6 md:p-6 xl:p-9 rounded-2xl">
          <div className=" m-auto">
            <Image
              src="/developer.svg"
              width={100}
              height={100}
              alt="Image"
              className="w-full rounded-lg"
            />
            <Link
              href="https://docs.google.com/forms/d/1Nc2CZoe7UJ7WqbNj7Gw9gXuyKBcP11hRJo25GvQmgYI/viewform?edit_requested=true"
              target="_blank"
            >
              <button className="w-full text-center text-white text-xl bg-purple-600 px-12 py-5 my-6 lg:my12 rounded-lg">
                Enroll
              </button>
            </Link>
          </div>
          <div className="mb-10">
            <h2 className="lg:text-2xl md:text-2xl sm:text-xl text-lg mb-6">
              Course Includes
            </h2>

            <div className="flex flex-col gap-6">
              <h1 className="flex lg:gap-12 gap-4 lg:text-xl md:text-lg text-sm">
                <Image
                  src="/lessons.svg"
                  width={20}
                  height={20}
                  alt="lessons"
                />
                <span>14 Lessons</span>
              </h1>
              <h1 className="flex lg:gap-12 gap-4 lg:text-xl md:text-lg text-sm">
                <Image
                  src="/certificate.svg"
                  width={20}
                  height={20}
                  alt="certificate icon"
                />
                <span>Certificate upon Completion</span>
              </h1>
              <h1 className="flex lg:gap-12 gap-4 lg:text-xl md:text-lg text-sm">
                <Image src="/access.svg" width={20} height={20} alt="access" />
                <span>Access on Mobile and PC</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="my-24">
        <h1 className="lg:text-3xl text-2xl">Course Outline:</h1>
        <div className="bg-[#f4f4f4] rounded-md mt-8">
          <div className="px-8 py-4">
            <Outline />
          </div>
        </div>
      </div>
    </section>
  );
}
