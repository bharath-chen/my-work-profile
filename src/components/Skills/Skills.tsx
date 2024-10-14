import { SKILLS } from "../../data/SKILLS";
import Skill from "./Skill";
import WorkFlow from "./WorkFlow";

const Skills = () => {
  const { sectionTitle, sectionSubTitle, skillList, workFlow } = SKILLS;
  return (
    <div className="my-auto">
      <h2 className="mb-5">
        <i className="fa fa-cogs"></i> {sectionTitle}
      </h2>

      <h3 className="mb-5">{sectionSubTitle}</h3>

      {skillList.map((item) => (
        <Skill key={item.id} skillItem={item} />
      ))}

      <WorkFlow title={workFlow.title} list={workFlow.list} />
    </div>
  );
};

export default Skills;
