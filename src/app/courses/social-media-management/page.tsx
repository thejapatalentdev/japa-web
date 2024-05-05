import Image from "next/image";
import Outline2 from "../components/Outline/Outline2";
import Link from "next/link";

export default function SocialMediaManagement() {
  return (
    <section className="Jcontainer flex flex-col lg:mb-40 mx-auto">
      <div className="gContainer mt-20 h-full">
        <div className="flex flex-[60] h-full flex-col gap-4">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-semibold mb-5">
            SOCIAL MEDIA MANAGEMENT Certification
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mb-4">
            This intensive four-week course aims to equip beginners with
            essential skills in social media management. Participants will delve
            into the intricacies of crafting effective strategies, creating
            engaging content, and measuring performance across various social
            media platforms. Through a blend of theoretical learning and
            hands-on exercises, students will develop the confidence and
            proficiency required to navigate the dynamic landscape of social
            media
          </p>
          <p className="lg:text-xl md:text-xl sm:text-lg text-sm font-medium mb-3">
            This intensive four-week course aims to equip beginners with
            essential skills in social media management
          </p>
          <p className="lg:text-xl md:text-xl sm:text-lg  text-sm mb-2">
            This program is powered by JAPA a community of over 1000 Africans
            passionate about upskilling and career advancement. Terms &
            Conditions Apply
          </p>

          <div className="border border-gray-200 shadow-sm p-12 mt-12 rounded-2xl">
            <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-lg">
              Requirements
            </h2>
            <ul className="lg:text-xl md:text-lg text-sm  mt-6">
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
        <div className="mx-auto w-full max-h-[900px]  mt-4 bg-[#cbb1ef] developerImg lg:max-w-[30rem] lg:flex-[20] xl:lg:flex-[20]  p-6 xl:p-9 rounded-2xl">
          <div className="w-full m-auto">
            <Image
              src="/developer.svg"
              width={100}
              height={100}
              alt="Image"
              className="w-full rounded-lg"
            />
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdTpSfKT-GMO91ONrImUxGcNQrUU-tWtnDrjmRsp-Pfo2sNXQ/viewform"
              target="_blank"
            >
              <button className="w-full text-center text-white text-xl bg-purple-600 px-12 py-5 my-12 rounded-lg">
                Enroll
              </button>
            </Link>
          </div>
          <div className="mb-10">
            <h2 className="lg:text-2xl md:text-2xl sm:text-xl text-lg mb-6">
              Course Includes
            </h2>

            <div className="flex flex-col gap-6">
              <h1 className="flex gap-4 lg:gap-12 lg:text-xl md:text-xl sm:text-lg text-sm">
                <Image
                  src="/lessons.svg"
                  width={20}
                  height={20}
                  alt="lessons icon"
                />
                <span>4 Lessons</span>
              </h1>
              <h1 className="flex gap-4 lg:gap-12 lg:text-xl md:text-xl sm:text-lg text-sm">
                <Image
                  src="/certificate.svg"
                  width={20}
                  height={20}
                  alt="certiifcate icon"
                />
                <span>Certificate upon Completion</span>
              </h1>
              <h1 className="flex gap-4 lg:gap-12 lg:text-xl md:text-xl sm:text-lg text-sm">
                <Image
                  src="/access.svg"
                  width={20}
                  height={20}
                  alt="access icon"
                />
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
            <Outline2 />
          </div>
        </div>
      </div>
    </section>
  );
}
