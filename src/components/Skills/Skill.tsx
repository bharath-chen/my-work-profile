interface Technology {
  id: string;
  tooltip: string;
  iconClassName: string;
  title: string;
  style?: { color: string };
}

interface SkillItem {
  title: string;
  technologies: Technology[];
}

interface Props {
  skillItem: SkillItem;
}

const Skill = ({ skillItem: skillList }: Props) => {
  const { title, technologies } = skillList;

  return (
    <div>
      <h4>{title}</h4>
      <ul className="list-inline list-icons">
        {technologies.map((technology) => (
          <li
            key={technology.id}
            className="list-inline-item"
            data-toggle="tooltip"
            data-placement="top"
            title={technology.tooltip}
          >
            <i
              style={technology.style}
              className={`devicons ${technology.iconClassName} colored mx-2`}
            ></i>
            <p className="mx-2">{technology.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
