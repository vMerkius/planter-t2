import { Link } from "react-router-dom";

type CardProps = {
  img: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ img, title, description }) => {
  return (
    <div className="flex gap-4 p-4 bg-[#3A6150] rounded-xs">
      <img src={img} alt="Card image" className="h-48 w-auto object-cover " />
      <div className="text-white flex flex-col gap-4 justify-between max-w-[25rem]">
        <h2 className="text-lg font-semibold ">{title}</h2>
        <p className="text-xs ">{description}</p>
        <Link className="underline text-sm" to="/">
          Learn more about &#8594;
        </Link>
      </div>
    </div>
  );
};

export default Card;
