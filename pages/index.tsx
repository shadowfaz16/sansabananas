import Head from "next/head";
import { Hero } from "../components";
import { StickyScrollRevealDemo } from "../components/reveal";
import { TextGenerateEffectDemo } from "../components/text-generate";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

export default function Home() {
  return (
    <>
      <Head>
        <title key="title">No Bananas - Fun, safe livestreams with N🚫 BANANAS
        </title>
        <meta key="description" name="description" content="Fun, safe livestreams with N🚫 BANANAS" />
        <link key="icon" rel="icon" href="/favicon.ico" />
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <meta key="theme-color" name="theme-color" content="#000000" />
        <meta key="keywords" name="keywords" content="BANANAS, NFT, NFTs, NFT's, No Bananas, Bananas, Livestreaming, AI, Machine Learning, Computer Vision, Content Moderation, Real-Time Censoring, Customizable Filters, Community Trust" />
        <meta key="author" name="author" content="3sc" />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:creator" name="twitter:creator" content="@NodeAIETH" />
        <meta key="twitter:title" name="twitter:title" content="N🚫 BANANAS" />
        <meta key="twitter:description" name="twitter:description" content="Fun, safe livestreams with N🚫 BANANAS" />
        <meta key="twitter:image" name="twitter:image" content="https://nftstorage.link/ipfs/bafybeihvmsp5bce24q54wgawgecgelyihaeaajnmngwathtzktb53ajbq4" />
        <meta key="twitter:image:alt" name="twitter:image:alt" content="N🚫 BANANAS" />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:locale" property="og:locale" content="en_US" />
        <meta key="og:url" property="og:url" content="https://nobananas.io/" />
        <meta key="og:title" property="og:title" content="N🚫 BANANAS" />
        <meta key="og:description" property="og:description" content="Fun, safe livestreams with N🚫 BANANAS" />
        <meta key="og:image" property="og:image" content="https://nftstorage.link/ipfs/bafybeihvmsp5bce24q54wgawgecgelyihaeaajnmngwathtzktb53ajbq4" />
        <meta key="og:image:alt" property="og:image:alt" content="N🚫 BANANAS" />


      </Head>
      <Hero />
      <StickyScrollRevealDemo />
      <TextGenerateEffectDemo />
    </>
  )
}
