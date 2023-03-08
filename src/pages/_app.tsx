import { ImagesProvider } from "@/providers/images";
import { ProblemsProvider } from "@/providers/problems";
import { SoftwaresProvider } from "@/providers/softwares";
import { MantineProvider } from "@mantine/core";
import NextApp, { AppContext, AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <SoftwaresProvider>
          <ProblemsProvider>
            <ImagesProvider>
              <Component {...pageProps} />
            </ImagesProvider>
          </ProblemsProvider>
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
