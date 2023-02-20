import React from "react";

const Project = () => {
  const projectsData = [
    {
      name: `Kabir Jaipal - Developer`,
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: `https://miro.medium.com/max/1400/1*aTYOTFS4Vkr-nwHNML3GvQ.jpeg`,
      link: `https://github.com/kabirsingh2004`,
    },
    {
      name: `Kabir Jaipal - Developer`,
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: `https://miro.medium.com/max/1400/1*aTYOTFS4Vkr-nwHNML3GvQ.jpeg`,
      link: `https://github.com/kabirsingh2004`,
    },
    {
      name: `Kabir Jaipal - Developer`,
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: `https://miro.medium.com/max/1400/1*aTYOTFS4Vkr-nwHNML3GvQ.jpeg`,
      link: `https://github.com/kabirsingh2004`,
    },
  ];
  return (
    <section id="project" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Projects
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg cursor-pointer overflow-hidden shadow-lg transition duration-700 hover:bg-gray-300"
            >
              <img
                className="h-48 w-full object-cover"
                src={project.image}
                alt={project.name}
              />
              <div className="p-6">
                <h3 className="font-semibold text-gray-800">{project.name}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target={"_blank"}
                    className="text-indigo-500 font-semibold transition text-lg hover:text-indigo-600"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
