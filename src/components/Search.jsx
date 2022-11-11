const InputWithLabel = ({
  id,
  label,
  value,
  onInputChange,
  type = "text",
  children,
  isFocused,
}) => (
  <>
    <label htmlFor={id}>{children} </label>
    <input
      id={id}
      type={type}
      value={value}
      autoFocus={isFocused}
      onChange={onInputChange}
    />
  </>
);

export default InputWithLabel;
