import Image from "next/image";
import React from "react";

const Project = ({
  projectLink,
  prokectTitle,
  projectImage,
}: {
  projectLink: String;
  prokectTitle: String;
  projectImage: String;
}) => {
  return (
    <div className="dark:bg-secondary bg-white shadow-lg dark:shadow-none rounded-lg h-fit px-5 py-5">
      <h4 className="font-bold mb-5 text-lg">{prokectTitle}</h4>
      <Image
        src={`/${projectImage}`}
        className="w-full rounded-lg h-full"
        width={500}
        height={500}
        alt="Portfolio "
      />
      <a
        target="_blank" rel="noreferrer" href={`${projectLink}`}
        className="bg-blue-500 hover:bg-white text-white hover:text-secondary  rounded-lg transition-all mt-5 px-10 py-3 block"
      >
        View Website
      </a>
    </div>
  );
};

export default Project;
