import { EDUCATION } from "../../data/EDUCATION";

const Education = () => {
  const {
    sectionTitle,
    institution,
    educationalQualification,
    course,
    cgpa,
    timePeriod,
  } = EDUCATION;

  return (
    <div className="my-auto">
      <h2 className="mb-5">
        <i className="fa fa-graduation-cap"></i> {sectionTitle}
      </h2>

      <div className="resume-item d-flex flex-column align-content-md-between flex-wrap flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-0">{institution}</h3>
          <div className="subheading mb-2">{educationalQualification}</div>
          <p className="mb-1">{course}</p>
          <p>CGPA: {cgpa}</p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{timePeriod}</span>
        </div>
      </div>
    </div>
  );
};

export default Education;
