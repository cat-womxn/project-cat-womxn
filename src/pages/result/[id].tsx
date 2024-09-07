import { GetServerSidePropsContext } from 'next'
import Description from '@/components/Description'
import data from '@/data/organization.json'
import SimilarOrgans from '@/components/SimilarOrgans'
import Share from '@/components/Share'
import * as m from '@/paraglide/messages'

type ResultProps = {
  type: string
}

const ResultPage = ({ type }: ResultProps) => {
  const result = data.find((item) => item.type === type)
  if (!result) return null
  return (
    <div className="pb-10">
      <Description
        name={m[result.name as keyof typeof m]()}
        title={m[result.title as keyof typeof m]()}
        url={result.mainUrl}
        imageUrl={result.imageUrl}
        donationUrl={result.donationUrl}
        description={m[result.description as keyof typeof m]()}
        characteristics={result.characteristics}
        matchingPoints={result.matchingPoints}
      />
      <SimilarOrgans organs={result.similarOrganizations} />
      <Share />
    </div>
  )
}

export default ResultPage

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const query = ctx.query
  console.log(ctx, query)
  return {
    props: {
      type: query.id,
    },
  }
}
