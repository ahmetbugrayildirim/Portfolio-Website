import { Link } from "react-router-dom";

const Card = ({ project, content }) => (
  <div className="project-card">
    <h2>{project?.name}</h2>
    <p>{content}</p>
    <Link to={`/projectDetails/${project?.id}`} className="more-button">More</Link>
  </div>
);
export default Card;