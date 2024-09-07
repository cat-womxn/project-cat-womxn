import Button from "./Button";
import Card from "./Card";
import HighlightText from "./HighlightText";

type SimilarOrgansProps = {
  organs: string[];
};

const SimilarOrgans = ({ organs }: SimilarOrgansProps) => {
  return (
    <Card>
      <HighlightText className="text-green">
        당신이 좋아할만한 단체
      </HighlightText>
      <ul className="list-disc list-inside">
        <li>{organs[0]}</li>
        <li>{organs[1]}</li>
      </ul>
      <Button className="mt-4" text="목록으로" href="/list" />
    </Card>
  );
};

export default SimilarOrgans;
