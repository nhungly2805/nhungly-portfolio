import React, { useState } from "react";
import ProjectsData from "../data/projects";
import { IoClose } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

// GIỮ NGUYÊN MODAL VỚI NỀN TỐI ĐỂ TẠO SỰ TẬP TRUNG
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div 
        className="bg-[#181818] text-white rounded-lg w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white">
          <IoClose />
        </button>

        <h2 className="text-3xl font-bold mb-1">{project.name}</h2>
        <p className="text-gray-400 mb-6">{project.tagline}</p>
        
        <div className="relative h-64 rounded-lg overflow-hidden mb-8" style={{ backgroundImage: `url(${project.cardImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                <img src={project.logo} alt={`${project.name} logo`} className="w-24 h-24 object-contain" />
            </div>
        </div>

        <div className="space-y-8">
            <div>
                <h3 className="text-xl font-bold mb-3">Project Objective</h3>
                <p className="text-gray-300">{project.projectObjective}</p>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-3">Key Achievements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {project.keyAchievements.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-3">Technologies & Implementation</h3>
                <p className="text-gray-300 mb-4">{project.technologiesAndImplementation}</p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                </div>
            </div>

            {project.projectConfidentiality && (
                 <div className="bg-yellow-900/30 border border-yellow-700 text-yellow-300 px-4 py-3 rounded-lg">
                    <h4 className="font-bold">Project Confidentiality</h4>
                    <p>{project.projectConfidentiality}</p>
                </div>
            )}

            <div>
                <h3 className="text-xl font-bold mb-3">Impact & Results</h3>
                <p className="text-gray-300">{project.impactAndResults}</p>
            </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href={project.liveSiteUrl} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all">
                <FiExternalLink /> View Live Site
            </a>
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all">
                <FaGithub /> View Code
            </a>
        </div>
      </div>
    </div>
  );
};

// CARD DỰ ÁN VỚI NỀN TRẮNG VÀ HIỆU ỨNG HOVER
const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div 
      className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md flex flex-col h-full group transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
      data-aos="fade-up"
    >
      {/* Phần ảnh và logo */}
      <div className="relative h-48" style={{ backgroundImage: `url(${project.cardImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <img src={project.logo} alt={`${project.name} logo`} className="w-20 h-20 object-contain" />
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {project.categories.map((cat, index) => (
            <span key={index} className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">{cat}</span>
          ))}
        </div>
      </div>

      {/* Phần nội dung */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{project.tagline}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs font-medium">{tech}</span>
          ))}
          {project.technologies.length > 4 && <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs font-medium">+{project.technologies.length - 4} more</span>}
        </div>
        <button onClick={onViewDetails} className="mt-auto text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
            View Details <FiExternalLink className="transition-transform duration-300 group-hover:rotate-45" />
        </button>
      </div>
    </div>
  );
};


// COMPONENT CHÍNH VỚI NỀN TRẮNG VÀ CĂN GIỮA
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="bg-white text-gray-900 body-font py-16">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
                Projects
            </h1>
            <p
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="text-lg font-medium leading-relaxed text-dark-orange"
            >
                My Works
            </p>
        </div>
        
        {/* THAY ĐỔI TỪ GRID SANG FLEX ĐỂ TỰ ĐỘNG CĂN GIỮA */}
        <div className="flex flex-wrap justify-center gap-8">
          {ProjectsData.map((project) => (
            <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3">
                <ProjectCard
                    project={project}
                    onViewDetails={() => handleOpenModal(project)}
                />
            </div>
          ))}
        </div>
      </div>
      
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
};

export default Projects;