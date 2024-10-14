interface WorkFlowItem {
  id: string;
  flow: string;
}

interface Props {
  title: string;
  list: WorkFlowItem[];
}

const WorkFlow = ({ title = "Workflow", list }: Props) => {
  return (
    <>
      <h3 className="my-4">{title}</h3>
      <ul className="fa-ul list-text mb-0">
        {list.map((item) => (
          <li className="mb-2" key={item.id}>
            <i className="fa-li fa fa-check"></i>
            {item.flow}
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkFlow;
