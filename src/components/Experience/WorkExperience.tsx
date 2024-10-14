export interface Experience {
  role: string;
  company: string;
  description: string;
  timePeriod: string;
}

interface Props {
  workExperience: Experience;
}

const WorkExperience = ({ workExperience }: Props) => {
  const { role, company, description, timePeriod } = workExperience;

  return (
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
      <div className="resume-content mr-auto">
        <h3 className="mb-2">{role}</h3>
        <div className="subheading mb-3">{company}</div>
        <p>{description}</p>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{timePeriod}</span>
      </div>
    </div>
  );
};

export default WorkExperience;
