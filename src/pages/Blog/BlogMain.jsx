import React from "react";
import { Img, Heading, Text } from "../../components";

const blogs = [
  {
    title: "Boosting Productivity with AI Tools",
    author: "John Doe",
    category: "Technology",
    description: "Explore how AI tools improve productivity across industries with automation and insights.",
    img: "/images/automation_image.jpg", // AI tools
  },
  {
    title: "Design Thinking in Modern Teams",
    author: "Julia Parker",
    category: "Design",
    description: "How teams apply creative strategies to solve problems through user-centered design.",
    img: "/images/cognitive_computing_image.jpg", // Design thinking
  },
  {
    title: "Remote Work Culture: The Future",
    author: "Maria Doe",
    category: "Workplace",
    description: "Trends and challenges in the shift to a fully remote work environment.",
    img: "/images/web_development_image.jpg", // Remote work
  },
  {
    title: "Financial Planning for Startups",
    author: "Alex Smith",
    category: "Finance",
    description: "Key insights for managing capital and scaling finances for early-stage startups.",
    img: "/images/staff_argumentation_image.jpg", 
  },
  {
    title: "Mental Health at Work",
    author: "Rachel Green",
    category: "Wellness",
    description: "Why mental wellness in the workplace is key to employee performance and retention.",
    img: "/images/recurtment_service.jpg", // Mental health
  },
  {
    title: "The Rise of Web3 & Decentralization",
    author: "Ethan Brown",
    category: "Blockchain",
    description: "What Web3 means for users, developers, and the decentralized internet.",
    img: "/images/app_development_image.jpg", // Web3
  },
];

const BlogMain = () => {
  return (
   <div className="relative pb-20 pt-20 text-black overflow-hidden">
      <div className="w-full flex justify-center items-center">
        <div className="relative z-10 flex justify-center gap-6 flex-wrap max-w-[1200px]">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg w-[320px] flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Img
                src={`${blog.img}?auto=format&fit=crop&w=800&q=80`}
                alt="Blog"
                className="w-full h-[200px] object-cover"
              />
              <div className="p-5 flex flex-col gap-2">
                <Heading
                  as="h3"
                  className="text-xl md:text-lg sm:text-base font-semibold text-gray-900"
                >
                  {blog.title}
                </Heading>
                <Text className="text-sm md:text-xs sm:text-xs text-gray-600 font-medium">
                  {blog.author} &nbsp;/&nbsp; {blog.category}
                </Text>
                <Text className="text-sm md:text-xs sm:text-xs text-gray-700">
                  {blog.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
