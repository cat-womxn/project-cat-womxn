import { shareLink, shareTwitter } from "@/utils/url.helper";
import Card from "./Card";
import HighlightText from "./HighlightText";
import Icon from "./Icon";

const Share = () => {
  // const url = typeof window !== undefined ? new URL(window.location.href) : new URL("");
  return (
    <Card>
      <HighlightText className="text-green">결과 공유하기</HighlightText>
      <div className="flex">
        <Icon
          src="https://cdn-icons-png.flaticon.com/512/2496/2496110.png"
          alt="트위터"
          onClick={shareTwitter}
        />
        <Icon src="/images/link.webp" alt="링크" onClick={shareLink} />
      </div>
    </Card>
  );
};

export default Share;
