import Card from "./Card";
import HighlightText from "./HighlightText";

type DescriptionProps = {
  title: string;
  name: string;
  url: string;
  imageUrl: string;
  description: string;
  characteristics: string[];
  matchingPoints: string[];
};

type HeadlineProps = {
  name: string;
};

const Headline = ({ name }: HeadlineProps) => (
  <div className="bg-green relative h-[20px] flex justify-center items-center">
    <HighlightText
      className="text-white font-gmarket pb-4 tracking-widest"
      style={{
        textShadow:
          "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 0 0 black, -1px 0 0 black, 0 1px 0 black, 0 -1px 0 black",
      }}
    >
      {name}
    </HighlightText>
  </div>
);

const Description = ({
  title,
  name,
  url,
  imageUrl,
  description,
  characteristics,
  matchingPoints,
}: DescriptionProps) => {
  return (
    <Card>
      <Headline name={name} />
      <img src={imageUrl} alt={name} />
      <HighlightText>
        <strong className="text-green">{title}</strong>
        <span className="text-[14px]"> 당신에게 어울리는 단체는</span>
        <br />
        <a href={url} target="_blank">
          <b className="text-green hover:underline text-[25px]">{name}</b>
        </a>
      </HighlightText>
      <p>{description}</p>
      <br />
      <HighlightText className="text-green">
        후원 단체 특징
      </HighlightText>
      <ul className="list-disc list-inside">
        {characteristics.map((characteristic) => (
          <li key={characteristic}>{characteristic}</li>
        ))}
      </ul>
      <br />
      <HighlightText className="text-green">
        이런 점이 당신과 닮아 있어요
      </HighlightText>
      <ul className="list-disc list-inside">
        {matchingPoints.map((matchingPoint) => (
          <li key={matchingPoint}>{matchingPoint}</li>
        ))}
      </ul>
    </Card>
  );
};

export default Description;
