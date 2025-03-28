type InputProps = {
  id: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ id, className = "", ...props }) => {
  return (
    <input
      id={id}
      className={`border-1 p-2 h-full focus:outline-[#3A6150] focus:border-2 ${className}`}
      {...props}
    />
  );
};

export default Input;
