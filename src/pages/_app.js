import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

const SITE_URL = "https://portfolio-two-vert-61.vercel.app";
const OGP_IMAGE = `${SITE_URL}/images/projects/tomareco/top.png`;
const SITE_TITLE = "Yuuri Inoue | Portfolio";
const SITE_DESCRIPTION =
  "井上悠理のポートフォリオサイトです。フロントエンド開発を軸に、WebアプリやiOSアプリを制作しています。";

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* OGP */}
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OGP_IMAGE} />
        <meta property="og:site_name" content="Yuuri Inoue Portfolio" />
        <meta property="og:locale" content="ja_JP" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={OGP_IMAGE} />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
