import Link from "next/link";
import instagram from "@/assets/CoursesAssets/instagram.svg";
import linkedln from "@/assets/CoursesAssets/linkedin.svg";
import Image from "next/image";

export default function CoursesFooter() {
  const Icons = [
    {
      href: "https://www.linkedin.com/company/japaglobal/?viewAsMember=true",
      icon: linkedln,
      alt: "Japa Linkedln profile",
    },
    {
      href: "https://www.instagram.com/japatechglobal",
      icon: instagram,
      alt: "Japa Instagram Profile",
    },
  ];
  const About = [
    {
      id: 1,
      text: "Our Mission",
      href: "/about#mission",
    },
    {
      id: 2,
      text: "Our Vision",
      href: "/about#vision",
    },
    {
      id: 3,
      text: "FAQ",
      href: "/faq",
    },
  ];

  return (
    <footer>
      <div className="w-full border-t  border-gray-200  h-full flex items-center mb-40 md:mb-10 lg:mb-5">
        <div className="Jcontainer w-full flex lg:flex-row md:flex-row flex-col justify-around mt-20">
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
                ​ <span className="text-purple-600">Tel:</span> +234 8128206869
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
                  <Link href="/courses/product-management">
                    Product Management
                  </Link>
                </li>
              </ol>
            </div>
            <div className="mt-8">
              <p className="lg:text-2xl mg:text-xl text-lg text-purple-600 mb-4">
                Coming Courses**
              </p>
              <ul className="lg:text-2xl mg:text-xl text-lg">
                <li className="mb-3 hover:text-purple-600">Cybersecurity</li>
                <li className="mb-3 hover:text-purple-600">Product Design</li>
                <li className="mb-3 hover:text-purple-600">Machine Learning</li>
                <li className="mb-3 hover:text-purple-600">
                  Digital Marketing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className=" w-full p-9 flex items-center justify-center bg-[#cbb1ef] h-[4vw] text-center text-lg ">
          © 2024 by Japatalent
        </p>
      </div>
    </footer>
  );
}
