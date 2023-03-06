import { SoftwaresProvider } from "@/providers/softwares";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SoftwaresProvider>
        <Component {...pageProps} />
      </SoftwaresProvider>
    </>
  );
}
