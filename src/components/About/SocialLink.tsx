interface Props {
  className: string;
  url: string;
}

const SocialLinkIcon = ({ url, className }: Props) => {
  return (
    <a href={url}>
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x"></i>
        <i className={`fa ${className} fa-stack-1x fa-inverse`}></i>
      </span>
    </a>
  );
};

export default SocialLinkIcon;
