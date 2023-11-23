import ProjectCard from './ProjectCard';
import { contents, projectMetadata } from '../utils/constants';

const Projects = () => {
  return (
    <div id='projects'>
      <h1>Projects</h1>
      <div className="project-container">
        <ProjectCard project={projectMetadata.portfolio} content={contents[0]} />
        <ProjectCard project={projectMetadata.capstone} content={contents[1]} />
        <ProjectCard project={projectMetadata.game} content={contents[2]} />
        <ProjectCard project={projectMetadata.mindset} content={contents[3]} />
        <ProjectCard project={projectMetadata.movie} content={contents[4]} />
        <ProjectCard project={projectMetadata.calculator} content={contents[5]} />

      </div>
    </div>
  )
};

export default Projects;