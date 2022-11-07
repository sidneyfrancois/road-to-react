const Item = ({ title, author, num_comments, url }) => (
  <>
    <li>
      <span>{title}</span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{url}</span>
    </li>
  </>
);

export default Item;
