import SkillType from "./SkillType";

const Card = ({ type, skills }) => (
  <div>
    <h2>{type}</h2>
    <div className="skills-container">
      {skills.map(skill => <SkillType skill={skill} />)}
    </div>
  </div>
);

export default Card;