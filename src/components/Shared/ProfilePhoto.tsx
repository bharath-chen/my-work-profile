import profilePhoto from "../../assets/my-photo.jpg";

interface Props {
  id?: string;
  className?: string;
  width?: string;
}

const ProfilePhoto = ({ id, className, width = undefined }: Props) => {
  return (
    <img
      width={width}
      className={className}
      id={id}
      src={profilePhoto}
      alt="profile photo"
    />
  );
};

export default ProfilePhoto;
