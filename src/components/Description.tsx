import Button from "./Button";
import Card from "./Card";
import HighlightText from "./HighlightText";

type DescriptionProps = {
  title: string;
  name: string;
  url: string;
  imageUrl: string;
  donationUrl: string;
  description: string;
  characteristics: string[];
  matchingPoints: string[];
};

const Description = ({
  title,
  name,
  url,
  imageUrl,
  donationUrl,
  description,
  characteristics,
  matchingPoints,
}: DescriptionProps) => {
  return (
    <Card>
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
      <HighlightText className="text-green">후원 단체 특징</HighlightText>
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
      <Button className="mt-4" text="후원 하러 가기" href={donationUrl} />
    </Card>
  );
};

export default Description;
