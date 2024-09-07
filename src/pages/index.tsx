import Image from 'next/image'
import { useRouter } from 'next/router'
import * as m from '@/paraglide/messages.js'

export default function Home() {
  const router = useRouter()

  function goToQuestionPage() {
    router.push('/question')
  }

  return (
    <div
      className={`font-preten flex items-center justify-center min-h-screen bg-yellow-400 p-8 pb-20 sm:p-20`}
    >
      <main className="flex flex-col items-center justify-center">
        <Image src="/images/intro.webp" alt="" width={500} height={300} priority />
        <h1
          className="mt-8 text-4xl font-bold font-gmarket text-center tracking-tighter leading-tight whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: m.home_title() }}
        ></h1>
        <h2 className="mt-4 mb-8 text-center text-md whitespace-pre-line">{m.home_subtitle()}</h2>
        <button
          className="mt-3 px-12 py-4 bg-[var(--green)] text-[var(--black)] rounded-3xl hover:bg-[var(--black)] hover:text-[var(--white)] transition-colors text-xl tracking-tighter border-solid border-2 border-[var(--black)]"
          onClick={goToQuestionPage}
        >
          {m.home_start()}
        </button>
      </main>
    </div>
  )
}
