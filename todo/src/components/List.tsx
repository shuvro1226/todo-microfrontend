type ListProps = {
  items: string[];
};

const List = (props: ListProps) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
