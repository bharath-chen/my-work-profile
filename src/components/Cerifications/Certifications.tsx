import { CERTIFICATIONS } from "../../data/CERTIFICATIONS";
import Certification from "./Certification";

const Certifications = () => {
  const { sectionTitle, certifications } = CERTIFICATIONS;

  return (
    <div className="my-auto">
      <h2 className="mb-5">
        <i className="fa fa-certificate"></i> {sectionTitle}
      </h2>

      {certifications.map((certification) => (
        <Certification key={certification.id} certification={certification} />
      ))}
    </div>
  );
};

export default Certifications;
