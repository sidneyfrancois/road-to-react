const Item = ({ item, onRemoveItem }) => {
  const handleRemoveitem = () => {
    onRemoveItem(item);
  };

  return (
    <li>
      <span>{item.title}</span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.url}</span>
      <span>
        <button type="button" onClick={handleRemoveitem}>
          Dismiss
        </button>
      </span>
    </li>
  );
};

export default Item;
