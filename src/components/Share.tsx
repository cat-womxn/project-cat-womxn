import { shareLink, shareTwitter } from '@/utils/url.helper'
import Card from './Card'
import HighlightText from './HighlightText'
import Icon from './Icon'
import Button from './Button'
import * as m from '@/paraglide/messages'
import { useRouter } from 'next/router'

const Share = () => {
  const router = useRouter()
  return (
    <Card>
      <HighlightText className="text-green">{m.result_share_result()}</HighlightText>
      <div className="flex">
        <Icon
          src="https://cdn-icons-png.flaticon.com/512/2496/2496110.png"
          alt="twitter"
          onClick={shareTwitter}
        />
        <Icon src="/images/link.webp" alt="link" onClick={shareLink} />
        <Icon src="/images/pencil.png" alt="guestbook" onClick={() => router.push("/guestbook")} />
      </div>
      <Button className="mt-4" text={m.result_button_restart()} onClick={() => router.push('/question')}/>
    </Card>
  )
}

export default Share
