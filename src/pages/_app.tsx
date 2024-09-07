import { ParaglideJS } from '@inlang/paraglide-next/pages'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="background-yellow">
      <ParaglideJS>
        <Component {...pageProps} />
      </ParaglideJS>
    </div>
  )
}
