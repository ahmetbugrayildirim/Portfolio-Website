import { useParams } from 'react-router-dom';
import { projectMetadata } from '../utils/constants';
import "../styles/projectDetails.css";

const Project = () => {
  const { pageId } = useParams();
  
  return (
    <div className='project-details-container'>
      <h1 className='project-details-title'>{projectMetadata[pageId].name}</h1>
      <div className='project-details'>
        <img src={projectMetadata[pageId].imgUrl} alt="Image" className="project-details-image" />
        <div className="project-details-description">{projectMetadata[pageId].description}</div>
      </div>
      <div className='project-details-language'>
        <h4>Tech Stack</h4>
        <ul>
          {projectMetadata[pageId].language.map(ln => <li key={ln}>{ln}</li> )}
        </ul>
      </div>
    </div>
  )
};

export default Project;