import Card from "./Card";
import HighlightText from "./HighlightText";
import Icon from "./Icon";

const Share = () => {
  return (
    <Card>
      <HighlightText className="text-green">결과 공유하기</HighlightText>
      <div className="flex">
        <Icon
          src=""
          alt="트위터"
          url=""
        />
        <Icon
          src=""
          alt="링크"
          url=""
        />
      </div>
    </Card>
  );
};

export default Share;
