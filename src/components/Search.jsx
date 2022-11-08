const InputWithLabel = ({
  id,
  label,
  value,
  onInputChange,
  type = "text",
  children,
}) => (
  <>
    <label htmlFor={id}>{children} </label>
    <input id={id} type={type} value={value} onChange={onInputChange} />
  </>
);

export default InputWithLabel;
