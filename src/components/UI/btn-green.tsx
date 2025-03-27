type GreenButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

const GreenButton: React.FC<GreenButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`bg-[#3A6150] flex items-center justify-center text-white hover:cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default GreenButton;
