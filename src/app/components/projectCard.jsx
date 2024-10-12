// This stores the past projects
import React from 'react';

const ProjectCard = ({date, label, description, techStacks }) => {
  return (
    <div className="flex flex-col p-[5%] ">
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="flex flex-col gap-5 rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <time datetime="2022-10-10" className="block text-base text-gray-500">
            {" "}
            {date}12-06-2020{" "}
          </time>

          <a href="#" className="flex flex-col gap-5">
            <h1 className="text-[2rem] font-medium text-gray-900">
              {label} This is a project!
            </h1>
            <h3 className="text-xl">
                {description} Hi, this is a project about transportation.
            </h3>
          </a>

          <div className="mt-4 flex flex-wrap gap-1">
            <span className="text-lg whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-600">
              {techStacks} Java
              {/* Note: techStacks should be in an array */}
            </span>

            <span className="text-lg whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-600">
              {techStacks} HTML
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
