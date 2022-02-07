import "@assets/main.css";
import "@assets/chrome-bug.css";

import { FC, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

import type { AppProps } from "next/app";
import { Head } from "@components/common";
import { isBrowser } from "@lib/helpers";

const Noop: FC = ({ children }) => <>{children}</>;

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isBrowser)
      document.documentElement.classList.toggle("is-loading", isLoading);
  }, [isLoading]);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      if (
        url.indexOf("?") > -1 &&
        url.split("?")[0] === router.asPath.split("?")[0]
      )
        return;

      setLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setTimeout(() => setLoading(false), 400);
    });

    Router.events.on("routeChangeError", () => setLoading(false));
  });

  useEffect(() => document.body.classList?.remove("loading"));

  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} key={router.asPath.split("?")[0]} />
      </Layout>
    </>
  );
}
