import ProjectsCard from "./Components/ProjectsCard";
import {projects} from "./Data";
const Projects = () => {
  return (
    <section id="projectSection">
      <p className="projectIntro"></p>
      <div className="projectContainer">
        {projects.map((project) => (
          <ProjectsCard
            
            img={project.image}

          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
