import Image from "next/image";
import React from "react";

const Skills = ({ imageUrl, title }: { imageUrl: String; title: String }) => {
  return (
    <div className="dark:bg-secondary bg-white shadow-lg dark:shadow-none text-center p-4 rounded-lg">
      <Image
        className="mx-auto object-contain w-20  h-20"
        src={`/${imageUrl}`}
        alt="Html Logo"
        width={100}
        height={100}
      />
      <h4 className="font-bold mt-4 uppercase">{title}</h4>
    </div>
  );
};

export default Skills;
