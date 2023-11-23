import { useParams } from 'react-router-dom';
import Project from '../components/Project';

const Home = () => {
  const { pageId } = useParams();

  return (
    <div className="home">
      <Project pageId={pageId} />
    </div>
  )
};

export default Home;