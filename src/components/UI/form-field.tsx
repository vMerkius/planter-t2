import Input from "./input";
import Label from "./label";

type FormFieldProps = {
  name: string;
  id: string;
  className?: string;
  isRequired?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormField: React.FC<FormFieldProps> = ({
  name,
  id,
  className = "",
  isRequired = false,
  ...props
}) => {
  return (
    <>
      <Label htmlFor={id} className="text-sm" isRequired={isRequired}>
        {name}
      </Label>
      <Input
        id={id}
        className={`w-full rounded-sm ${className}`}
        required={isRequired}
        aria-required={isRequired}
        {...props}
      />
    </>
  );
};

export default FormField;
