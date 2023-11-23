import SkillCard from './SkillCard';
import { skillData } from '../utils/constants';

const Skills = () => (
  <>
    <h1>Skills</h1>
    {skillData.map(data => <SkillCard type={data.type} skills={data.skills} />)}
  </>
);

export default Skills;