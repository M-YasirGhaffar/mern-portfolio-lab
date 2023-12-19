import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from 'react';


import projects from "../../backend/data";


import axios from 'axios';


function Projects() {

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    // Fetch projects data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data.projects);
        console.log("fe iueg fuiaeg uieg fuieg uiseg fuieg figsei fgeui fgse fg " + response.data.projects)
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="#projects" className="relative w-full py-10 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="text-3xl font-bold mb-4 md:text-center">Projects</h1>
        <p className="text-lg text-gray-600 mb-8 md:text-center">
          Explore my featured projects below.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden border border-black"
            >
              <img
                src={project.imageUrl}
                alt="Project"
                className="h-48 w-full object-cover rounded-t-md"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold mb-2">{project.title}</h1>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 px-3 py-1 mr-2 mb-2 text-xs font-semibold text-gray-900 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="w-full rounded-sm text-center bg-black text-xs font-semibold text-white px-2 py-1.5 shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.confirm('You are about to be redirected to google.com as projects were just placeholders')) {
                      window.open(project.url, '_blank');
                    }
                  }}
                >
                  View Project{" "}
                  <ArrowUpRight className="inline-block ml-1" size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;