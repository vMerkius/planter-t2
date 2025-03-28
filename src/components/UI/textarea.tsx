type TextareaProps = {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placehorder?: string;
  className?: string;
  rows?: number;
  cols?: number;
};

const Textarea: React.FC<TextareaProps> = ({
  id,
  value,
  onChange,
  placehorder,
  className = "",
  rows = 4,
  cols = 50,
}) => {
  return (
    <textarea
      id={id}
      rows={rows}
      cols={cols}
      value={value}
      onChange={onChange}
      className={`border-1 p-2 h-full focus:outline-[#3A6150] focus:border-2 ${className}`}
      placeholder={placehorder}
    />
  );
};

export default Textarea;
