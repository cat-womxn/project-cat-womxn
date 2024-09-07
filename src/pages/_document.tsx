import { languageTag } from "@/paraglide/runtime"
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang={languageTag()}>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
