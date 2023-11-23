import { useParams } from 'react-router-dom';
import { projectMetadata } from '../utils/constants';


const Contact = () => {
  const { pageId } = useParams();
  
  return (
        <>
    <div>
      <div className='project-image-description'>
        <img src={projectMetadata[pageId].imgUrl} alt="Image" className="image" />
        <div>Overwiew</div>
        <div>{projectMetadata[pageId].description}</div>
      </div>
      <div className='project-language'>
      {projectMetadata[pageId].language.map(ln => <div>{ln}</div> )}
        </div>
    </div>
  </>
)};

export default Contact;