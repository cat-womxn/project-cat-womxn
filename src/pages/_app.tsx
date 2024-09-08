import Head from "next/head";
import { ParaglideJS } from "@inlang/paraglide-next/pages";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as m from "@/paraglide/messages";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{m.meta_title()}</title>
        <meta property="description" content={m.home_subtitle()} />
        <meta property="og:site_name" content={m.meta_title()} />
        <meta property="og:title" content={m.meta_title()} />
        <meta property="og:description" content={m.home_subtitle()} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/og-image.png" />
        <meta name="twitter:title" content={m.meta_title()} />
        <meta
          name="twitter:description"
          content={m.home_subtitle()}
        />
      </Head>
      <div className="background-yellow">
        <ParaglideJS>
          <Component {...pageProps} />
        </ParaglideJS>
      </div>
    </>
  );
}
