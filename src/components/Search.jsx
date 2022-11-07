const InputWithLabel = ({ id, label, value, onInputChange, type = "text" }) => (
  <>
    <label htmlFor={id}>{label}: </label>
    <input id={id} type={type} value={value} onChange={onInputChange} />
  </>
);

export default InputWithLabel;
