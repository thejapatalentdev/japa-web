import Button from "@/common/Button/Button";
import AppLayout from "@/components/layout/AppLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewsImage from "@/assets/images/faq/news.webp";
import QuestionList from "@/components/faq/QuestionList";

const FAQPage = () => {
  return (
    <AppLayout>
      <div className="px-primary">
        <header className="faq-header-bg w-full h-[230px] items-center flex justify-center text-[30px] lg:text-[45px] text-center text-white rounded-[15px]">
          <h1>FAQ</h1>
        </header>
        <p className="text-lg lg:text-[22px] text-[#3D3D3D] mb-[52px] mt-[44px]">
          Welcome to Japa&apos;s Faq! Here, we answer all the questions you have
          about our tech-centric courses and offerings. At Japa, we pride
          ourselves on providing a diverse array of courses tailored to suit
          every learner&apos;s interests and career goals. While we currently
          specialize In No Code Tech Courses like Data Analysis and
          Product Management. We&apos;re excited to announce our plans to expand
          our offerings even further. Stay tuned for updates on our upcoming
          non-code tech courses, designed to equip you with the skills and
          knowledge needed to thrive in the rapidly evolving tech landscape.
        </p>
        <QuestionList />
        <div className="pt-[89px] faq-bg">
          <h2 className="font-medium text-[25px] lg:text-[40px] mb-[84px]">
            Stay up to date with JAPA news
          </h2>
          <div className="relative">
            <Image
              src={NewsImage}
              alt="Blog"
              className="w-full h-full object-cover"
            />
            <Link href="/courses" className="absolute bottom-9 right-[60px]">
              <Button className="!h-[76px] !w-[300px]">
                Check Our Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FAQPage;
