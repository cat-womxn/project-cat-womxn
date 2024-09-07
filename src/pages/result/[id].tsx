import { GetServerSidePropsContext } from "next";
import Description from "@/components/Description";
import data from "@/data/organization.json";
import SimilarOrgans from "@/components/SimilarOrgans";
import Share from "@/components/Share";
import Button from "@/components/Button";

type ResultProps = {
  type: string;
};

const ResultPage = ({ type }: ResultProps) => {
  const result = data.find((item) => item.type === type);
  if (!result) return null;
  return (
    <>
      <Description
        type={result.type}
        name={result.name}
        title={result.title}
        url={result.mainUrl}
        imageUrl={result.imageUrl}
        description={result.description}
        characteristics={result.characteristics}
        matchingPoints={result.matchingPoints}
      />
      <SimilarOrgans organs={result.similarOrganizations} />
      <Share />
      <Button text="테스트 다시하기" href="/question" />
      <Button text="후원 하러 가기" href={result.donationUrl} />
      <Button text="목록으로" href="/list" />
    </>
  );
};

export default ResultPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx.query;
  console.log(ctx, query);
  return {
    props: {
      type: query.id,
    },
  };
};
