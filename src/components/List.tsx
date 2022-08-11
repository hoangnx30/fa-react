interface Props {
  list: Array<string>;
  renderItem?: (item: string) => React.ReactNode;
}

function List(props: Props) {
  const { list } = props;
  return (
    <ul>
      {list.map((item) => {
        if (props.renderItem) {
          return props.renderItem(item);
        }
        return <li>{item}</li>;
      })}
    </ul>
  );
}

export default List;
