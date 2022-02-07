import { LocalBusinessJsonLd, NextSeo } from "next-seo"

import { Layout } from "@components/common"
import type { NextPage } from "next"

const HomePage: NextPage = () => (
  <Layout>
    <NextSeo
      title=""
      description=""
      canonical=""
      openGraph={{
        type: "website",
        url: "",
        description: "",
        images: [
          {
            url: "",
            width: 1200,
            height: 630,
          },
        ],
      }}
    />
    <LocalBusinessJsonLd
      type=""
      id=""
      name=""
      description=""
      url=""
      telephone=""
      address={{ streetAddress: "", addressLocality: "", addressRegion: "", postalCode: "", addressCountry: "" }}
      geo={{ latitude: "", longitude: "" }}
    />
    <h1>Nextjs + Typescript + Tailwindcss Boilerplate</h1>
  </Layout>
)

export default HomePage
