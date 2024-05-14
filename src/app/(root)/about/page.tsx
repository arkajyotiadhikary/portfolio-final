import Link from "next/link";
import React from "react";
import Image from "next/image";
import TechStack from "@/components/TechStack";

const About = () => {
      return (
            <div className="container px-10">
                  <h1 className="flex-center text-5xl font-bold md:text-5xl">About Me</h1>
                  <div className="my-10 flex flex-col gap-3 text-2xl">
                        <p>
                              Hi there! I'm Arka, a passionate full-stack developer with a
                              background in computer science and a knack for problem-solving. I'm
                              driven by a desire to build amazing software that brings value to
                              people's lives. I specialize in JavaScript, with expertise in React,
                              Node.js, and Next.js. I'm also proficient in microservices
                              architecture and enjoy exploring the latest technologies to stay
                              up-to-date with the latest trends in the industry.
                        </p>
                        <p>Here are some of the things im good at</p>
                  </div>
                  <TechStack />
            </div>
      );
};

export default About;
