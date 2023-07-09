import React from "react";
import { projects } from "../data";

const Works = () => {
  return (
    <div className="w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <h4 className="text-3xl font-bold text-black dark:text-white mt-10 ">
        Projetcs
      </h4>

      <div className="flex flex-wrap gap-10 lg:gap-20 justify-center ">
        {projects.map((p, index) => (
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            key={index}
            className="w-[350px] h-[550px] cursor-pointer shadow-xl hover:scale-110 ease-in-out duration-300 rounded-md "
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-[250px] object-cover rounded-md "
            />

            <div className="w-full h-[320px] rounded-md bg-white dark:bg-[#182f6f]">
              <h4 className="text-2xl text-black dark:text-white font-semibold py-2 px-2 ">
                {p.title}
              </h4>
              <p className="text-sm text-orange-600 px-3 uppercase">{p.cat}</p>
              <div className="text-sm  my-3 text-orange-50 px-1 uppercase">
                <a
                  target="blank"
                  className="px-3 py-1 rounded-md bg-orange-700 mx-2 "
                  href={p.url}
                >
                  Live site
                </a>
                <a
                  target="blank"
                  className="px-3 py-1 rounded-md bg-orange-700 mx-2 "
                  href={p.Gurl}
                >
                  Github
                </a>
              </div>
              <h1  className="text-lg font-bold text-white text-center py-1">Used Tech</h1>
              <div className="grid grid-cols-2 gap-2 px-2 justify-center items-center">
                {p.tech.map((skill, index) => (
                  <div
                    data-aos="zoom-in-down"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    key={index}
                    className="flex gap-2 shadow-lg py-1 px-2 bg-orange-600 rounded-full items-center hover:animate-bounce ease-in-out duration-300 w-28 md:w-40 h-12"
                  >
                    <div className="w-10 rounded-full h-10 my-1 bg-violet-950">
                      <img
                        src={skill.icon}
                        className=" p-2"
                        alt=""
                      />
                    </div>

                    <p className="text-md font-semibold text-white ">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
