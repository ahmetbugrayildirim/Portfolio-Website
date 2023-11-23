import SkillCard from './SkillCard';
import { skillData } from '../utils/constants';

const Skills = () => (
  <div id="skills">
    <h1>Skills</h1>
    {skillData.map(data => <SkillCard key={data.type} type={data.type} skills={data.skills} />)}
  </div>
);

export default Skills;