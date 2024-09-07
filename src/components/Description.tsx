import Button from './Button'
import Card from './Card'
import HighlightText from './HighlightText'
import * as m from '@/paraglide/messages'

type DescriptionProps = {
  title: string
  name: string
  url: string
  imageUrl: string
  donationUrl: string
  description: string
  characteristics: string[]
  matchingPoints: string[]
}

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
        <span className="text-[14px]"> {m.result_your_org()}</span>
        <br />
        <a href={url} target="_blank">
          <b className="text-green hover:underline text-[25px]">{name}</b>
        </a>
      </HighlightText>
      <p>{description}</p>
      <br />
      <HighlightText className="text-green">{m.result_characteristic()}</HighlightText>
      <ul className="list-disc list-inside">
        {characteristics.map((characteristic) => (
          <li key={characteristic}>{m[characteristic as keyof typeof m]()}</li>
        ))}
      </ul>
      <br />
      <HighlightText className="text-green">{m.result_matching()}</HighlightText>
      <ul className="list-disc list-inside">
        {matchingPoints.map((matchingPoint) => (
          <li key={matchingPoint}>{m[matchingPoint as keyof typeof m]()}</li>
        ))}
      </ul>
      <Button className="mt-4" text={m.result_button_donation()} href={donationUrl} />
    </Card>
  )
}

export default Description
