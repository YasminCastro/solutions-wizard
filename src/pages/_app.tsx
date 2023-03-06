import { ImagesProvider } from "@/providers/images";
import { SoftwaresProvider } from "@/providers/softwares";
import { MantineProvider } from "@mantine/core";
import NextApp, { AppContext, AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SoftwaresProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <ImagesProvider>
            <Component {...pageProps} />
          </ImagesProvider>
        </MantineProvider>
      </SoftwaresProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};
