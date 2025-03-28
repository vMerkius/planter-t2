import { Link } from "react-router-dom";

type CardProps = {
  img: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ img, title, description }) => {
  return (
    <article className="flex gap-4 p-4 bg-[#3A6150] rounded-xs">
      <img
        src={img}
        alt=""
        aria-hidden="true"
        width={125}
        height={190}
        className="w-[125px] h-[190px] object-cover shrink-0"
      />
      <div className="text-white flex flex-col gap-4 justify-between max-w-[25rem]">
        <h3 className="text-lg font-semibold ">{title}</h3>
        <p className="text-xs ">{description}</p>
        <Link
          className="underline text-sm"
          to="/"
          aria-label="Go to details page"
        >
          Learn more about &#8594;
        </Link>
      </div>
    </article>
  );
};

export default Card;
