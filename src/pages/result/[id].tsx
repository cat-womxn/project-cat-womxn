import { GetServerSidePropsContext } from "next";
import Description from "@/components/Description";
import data from "@/data/organization.json";
import SimilarOrgans from "@/components/SimilarOrgans";
import Share from "@/components/Share";

type ResultProps = {
  type: string;
};

const ResultPage = ({ type }: ResultProps) => {
  const result = data.find((item) => item.type === type);
  if (!result) return null;
  return (
    <>
      <Description
        name={result.name}
        title={result.title}
        url={result.mainUrl}
        imageUrl={result.imageUrl}
        donationUrl={result.donationUrl}
        description={result.description}
        characteristics={result.characteristics}
        matchingPoints={result.matchingPoints}
      />
      <SimilarOrgans organs={result.similarOrganizations} />
      <Share />
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
