import { ABOUT } from "../../data/ABOUT";
import ProfilePhoto from "../Shared/ProfilePhoto";
import SocialLinks from "./SocialLinks";

const About = () => {
  return (
    <div className="my-auto">
      <h2 className="mb-5 d-none d-lg-block">
        <i className="fa fa-user"></i> {ABOUT.sectionTitle}
      </h2>
      <div className="text-center d-md-block d-lg-none mb-3">
        <ProfilePhoto
          width="225px"
          className="img-fluid rounded-circle"
          id="main-profile-img"
        />
      </div>
      <h1 className="mb-3 profile-name text-center text-lg-left">
        {ABOUT.firstName}
        <span className="text-primary">{ABOUT.lastName}</span>
      </h1>
      <p className="mb-3">{ABOUT.description}</p>
      <div className="subheading mb-3">
        <strong>Contact No: </strong> {ABOUT.contactNo}
      </div>
      <div className="subheading mb-3">
        <strong>E-Mail: </strong>{" "}
        <a href="mailto:name@email.com">{ABOUT.mail}</a>
      </div>
      <SocialLinks socialLinks={ABOUT.socialLinks} />
    </div>
  );
};

export default About;
