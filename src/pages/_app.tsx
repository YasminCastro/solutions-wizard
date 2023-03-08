import { ImagesProvider } from "@/providers/images";
import { SoftwaresProvider } from "@/providers/softwares";
import { MantineProvider } from "@mantine/core";
import NextApp, { AppContext, AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <SoftwaresProvider>
          <ImagesProvider>
            <Component {...pageProps} />
          </ImagesProvider>
        </SoftwaresProvider>
      </MantineProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};
