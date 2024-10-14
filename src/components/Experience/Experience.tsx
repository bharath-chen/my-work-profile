import { EXPERIENCE } from "../../data/EXPERIENCE";
import WorkExperience from "./WorkExperience";

const Experience = () => {
  return (
    <div className="my-auto">
      <h2 className="mb-5">
        <i className="fa fa-briefcase"></i> {EXPERIENCE.sectionTitle}
      </h2>
      {EXPERIENCE.experiences.map((experience) => (
        <WorkExperience key={experience.id} workExperience={experience} />
      ))}
    </div>
  );
};

export default Experience;
