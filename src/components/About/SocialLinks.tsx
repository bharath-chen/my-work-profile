import SocialLinkIcon from "./SocialLink";

interface SocialLink {
  id: string;
  className: string;
  url: string;
}

interface Props {
  socialLinks: SocialLink[];
}

const SocialLinks = ({ socialLinks }: Props) => {
  return (
    <ul className="list-inline list-social-icons mb-0">
      {socialLinks.map((socialLink) => (
        <li key={socialLink.id} className="list-inline-item">
          <SocialLinkIcon
            className={socialLink.className}
            url={socialLink.url}
          />
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
