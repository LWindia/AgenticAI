import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      image: '/path-to-image1.jpg',
      title: 'Build a Company Researcher Agent',
      description: 'Learn to create a simple agent that researches a company and creates a short description',
    },
    {
      image: '/path-to-image2.jpg',
      title: 'Create a Resume Reviewer Agent',
      description: 'Create a smart agent to edit and review your resume, offering tailored suggestions',
    },
    {
      image: '/path-to-image3.jpg',
      title: 'Build a Customer Query Chatbot',
      description: 'Build a chatbot to take care of customer queries and provide relevant resolutions based on their problems',
    },
    {
      image: '/path-to-image4.jpg',
      title: 'Design a Sales Agent',
      description: 'Build an advanced agent that consists of information regarding various products of the company',
    },
    
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Reinforce your learning with 50+ projects</h2>
        <p className="text-gray-400 mt-2">Projects prepare you for the fast-moving industry and give you an edge over others to solve real-world problems.</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full mx-2">{'<'}</button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full mx-2">{'>'}</button>
      </div>
    </div>
  );
};

export default ProjectsSection;