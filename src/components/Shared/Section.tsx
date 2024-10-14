import { ReactNode } from "react";

interface Props {
  id: string;
  className: string;
  children: ReactNode | string;
}

const Section = ({ id, className = "", children }: Props) => {
  return (
    <section
      className={`resume-section p-3 p-lg-5 d-flex ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
