type InputWithoutBorderProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placehorder: string;
};

const InputWithoutBorder: React.FC<InputWithoutBorderProps> = ({
  placehorder,
  className = "",
  ...props
}) => {
  return (
    <input
      {...props}
      placeholder={placehorder}
      className={`bg-transparent border-b-1 border-[#111] ${className}`}
    />
  );
};

export default InputWithoutBorder;
