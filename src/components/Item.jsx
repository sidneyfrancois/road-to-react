const Item = ({ item }) => (
  <>
    <li>
      <span>{item.title}</span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.url}</span>
    </li>
  </>
);

export default Item;
