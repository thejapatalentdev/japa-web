import Image from "next/image";
import Link from "next/link";

export default function Card() {
  const data = [
    {
      id: 1,
      image: "/pods.webp",
      title: "Product Management",
      liveUrl: "/courses/product-management",
    },
    {
      id: 2,
      image: "/laptop.webp",
      title: "Data Analysis",
      liveUrl: "/courses/data-analysis",
    },
    {
      id: 3,
      image: "/talk.webp",
      title: "Social Media Management",
      liveUrl: "/courses/social-media-management",
    },
  ];

  return (
    <div className="cardContainer mb-60 h-[500px]">
      {data.map((item) => (
        <div
          key={item.id}
          className=" mx-auto lg:max-w-[400px] w-[280px] md:w-full h-[450px] md:h-[500px] card"
        >
          <Image
            src={item.image}
            width={300}
            height={300}
            alt="sss"
            className="w-full lg:max-h-[300px]"
          />
          <div className="flex flex-col px-5 lg:px-7 py-2 lg:py-4 gap-6 text-[#231d21]">
            <h3 className="font-bold lg:text-3xl text-2xl">{item.title}</h3>
          </div>
          <Link
            href={item.liveUrl}
            className="w-full flex items-end  justify-center text-center m-auto mt-5"
          >
            <button className="bg-purple-600 text-white px-6 sm:px-9 md:px-12 lg:px-12 py-4 rounded-lg text-lg">
              Apply for a Course
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
