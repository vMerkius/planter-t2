type InputWithoutBorderProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const InputWithoutBorder: React.FC<InputWithoutBorderProps> = ({
  className = "",
  ...props
}) => {
  return (
    <input
      {...props}
      className={`bg-transparent border-b border-[#111] ${className}`}
    />
  );
};

export default InputWithoutBorder;
