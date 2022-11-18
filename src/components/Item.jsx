const Item = ({ item, onRemoveItem }) => (
  <li>
    <span>{item.title}</span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.url}</span>
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </li>
);

export default Item;
