type GreenButtonProps = {
  children?: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const GreenButton: React.FC<GreenButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`bg-[#3A6150] flex items-center justify-center text-white hover:cursor-pointer hover:bg-[#4a7663] transition-all duration-200 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default GreenButton;
