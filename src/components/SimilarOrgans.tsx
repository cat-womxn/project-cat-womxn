import Button from "./Button";
import Card from "./Card";
import HighlightText from "./HighlightText";
import * as m from "@/paraglide/messages";

type SimilarOrgansProps = {
  organs: string[];
};

const SimilarOrgans = ({ organs }: SimilarOrgansProps) => {
  return (
    <Card>
      <HighlightText className="text-green">
        {m.result_another_orgs()}
      </HighlightText>
      <ul className="list-disc list-inside">
        {organs.map((organ, index) => (
          <li key={index}>{m[organ as keyof typeof m]()}</li>
        ))}
      </ul>
      <Button className="mt-4" text={m.result_button_list()} href="/list" />
    </Card>
  );
};

export default SimilarOrgans;
