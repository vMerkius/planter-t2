type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
  isRequired?: boolean;
  className?: string;
};

const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  isRequired = false,
  className = "",
}) => {
  return (
    <label htmlFor={htmlFor} className={`text-sm ${className}`}>
      {isRequired && <span className="text-red-500 mr-1">*</span>}
      {children}
    </label>
  );
};

export default Label;
