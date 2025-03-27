type InputProps = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placehorder?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placehorder,
  className = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`border-[#3A6150] border-2 p-2 h-full ${className}`}
      placeholder={placehorder}
    />
  );
};

export default Input;
