import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" href="/images/projects/tomareco/top.png" type="image/png" />
          <link rel="apple-touch-icon" href="/images/projects/tomareco/top.png" />
        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
