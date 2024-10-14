interface Certificate {
  id: string;
  name: string;
}

interface Certification {
  codingSchool: string;
  certificates: Certificate[];
}

interface Props {
  certification: Certification;
}

const Certification = ({ certification }: Props) => {
  const { codingSchool, certificates } = certification;
  return (
    <div>
      <h3>{codingSchool}</h3>
      <ul className="fa-ul list-text mb-3">
        {certificates.map((certificate) => (
          <li className="mb-2" key={certificate.id}>
            <i className="fa-li fa fa-certificate certificate-icon-color"></i>
            {certificate.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certification;
