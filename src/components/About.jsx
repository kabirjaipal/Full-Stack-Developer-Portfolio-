import React from "react";

const About = () => {
  const skillsData = [
    {
      name: `HTML`,
      logo: `https://img.icons8.com/color/48/000000/html-5.png`,
    },
    {
      name: `CSS`,
      logo: `https://img.icons8.com/color/48/000000/css3.png`,
    },
    {
      name: `JavaScript`,
      logo: `https://img.icons8.com/color/48/000000/javascript.png`,
    },
    {
      name: `Node.JS`,
      logo: `https://img.icons8.com/color/48/000000/nodejs.png`,
    },
    {
      name: `React.JS`,
      logo: `https://vikram-myportfolio.netlify.app/Images/reactjs.webp`,
    },
    {
      name: `MongoDB`,
      logo: `https://vikram-myportfolio.netlify.app/Images/mongodb.webp`,
    },
  ];
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-xl text-gray-500 capitalize">
            I am a full stack developer with experience building web
            applications using a variety of technologies, including:
          </p>
          <div className="mt-8 flex justify-center">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillsData.map((skill, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center cursor-pointer"
                >
                  <img
                    className="h-10 w-10"
                    src={skill.logo}
                    alt={skill.name}
                  />
                  <span className="mt-2 text-gray-600 font-bold">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
