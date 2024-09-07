import { shareLink, shareTwitter } from '@/utils/url.helper'
import Card from './Card'
import HighlightText from './HighlightText'
import Icon from './Icon'
import Button from './Button'
import * as m from '@/paraglide/messages'

const Share = () => {
  // const url = typeof window !== undefined ? new URL(window.location.href) : new URL("");
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
      </div>
      <Button className="mt-4" text={m.result_button_restart()} href="/question" />
    </Card>
  )
}

export default Share
