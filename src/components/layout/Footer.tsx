import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@/assets/icons/socials/instagram.svg";
import LinkedinIcon from "@/assets/icons/socials/linkedin.svg";
import JapaLogo from "../../assets/shapes/JapaLogo.svg";

const Footer = () => {
  const Icons = [
    {
      href: "https://www.linkedin.com/company/japaglobal/?viewAsMember=true",
      icon: LinkedinIcon,
      alt: "Japa Linkedln profile",
    },
    {
      href: "https://www.instagram.com/japatechglobal",
      icon: InstagramIcon,
      alt: "Japa Instagram Profile",
    },
  ];
  const About = [
    {
      id: 1,
      text: "Our Mission",
      href: "https://www.japatalent.com/about#",
    },
    {
      id: 2,
      text: "Our Vision",
      href: "https://www.japatalent.com/about#vision",
    },
    {
      id: 3,
      text: "FAQ",
      href: "https://www.japatalent.com/faq",
    },
  ];
  return (
    <footer className="mt-[100px] border-t border-t-primary">
      <div className="px-primary  pb-[70px] pt-10 ">
        <div className="flex items-start justify-between flex-wrap gap-10">
          <Image
            src={JapaLogo}
            width={100}
            height={100}
            alt="Japa Logo"
            className="lg:w-32 hidden lg:block"
          />
          <div className="flex flex-wrap gap-12 mx-auto">
            <div className="w-full flex lg:flex-row md:flex-row flex-col justify-around lg:gap-40">
              <div className="flex flex-col gap-8 p-4 md:p-8 lg:p-8">
                <div className="cursor-pointer flex flex-col">
                  <p className="lg:text-2xl mg:text-xl text-lg text-purple-600 mb-4">
                    About Us
                  </p>
                  <ul className="lg:text-2xl mg:text-xl text-lg">
                    {About.map((us) => (
                      <Link href={us.href} key={us.id}>
                        <li className="mb-2">{us.text}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
                <div>
                  <h1 className="lg:text-2xl mg:text-xl text-lg text-purple-600">
                    Contact Us
                  </h1>
                  <p className="my-3">
                    <span className="text-purple-600 text-xl">Email:</span>{" "}
                    thejapaglobal@gmail.com
                  </p>
                  <p>
                    ​ <span className="text-purple-600">Tel:</span> +234
                    8128206869
                  </p>
                </div>
                <div>
                  <p className="text-xl mb-6">Follow Us</p>
                  <div className="flex gap-4">
                    {Icons.map((item) => (
                      <Link
                        href={item.href}
                        target="_blank"
                        key={item.href}
                        rel="noreferrer noopener"
                        className="w-12 h-12 flex bg-[#ffffff1a] rounded-md backdrop-blur-sm border border-[#ffffff1a]"
                      >
                        <Image src={item.icon} alt={item.alt} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cursor-pointer p-8">
                <div>
                  <p className="lg:text-2xl mg:text-xl text-lg text-purple-600 mb-8">
                    Available Courses
                  </p>
                  <ol className="lg:text-2xl mg:text-xl text-lg">
                    <li className="mb-3 hover:text-purple-600 ">
                      <Link href="/courses/data-analysis">Data Analysis</Link>
                    </li>
                    <li className="mb-3 hover:text-purple-600 ">
                      <Link href="/courses/social-media-management">
                        Social Media Management
                      </Link>
                    </li>
                    <li className="hover:text-purple-600">
                      <Link href="/product-management">Product Management</Link>
                    </li>
                  </ol>
                </div>
                <div className="mt-8">
                  <p className="lg:text-2xl mg:text-xl text-lg text-purple-600 mb-8">
                    Coming Courses**
                  </p>
                  <ul className="lg:text-2xl mg:text-xl text-lg">
                    <li className="mb-3 hover:text-purple-600">
                      Cybersecurity
                    </li>
                    <li className="mb-3 hover:text-purple-600">
                      Product Design
                    </li>
                    <li className="mb-3 hover:text-purple-600">
                      Machine Learning
                    </li>
                    <li className="mb-3 hover:text-purple-600">
                      Digital Marketing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[18px] w-full bg-[#D715D4]" />
    </footer>
  );
};

export default Footer;
