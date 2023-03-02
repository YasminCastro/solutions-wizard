import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import LeftSection from "@/components/Pages/Login/Left";
import RightSection from "@/components/Pages/Login/Right";
import { PageContainer, PageWrapper } from "@/styles/Page";

export default function Home() {
  return (
    <>
      <SEO title="Login" />
      <Layout>
        <PageWrapper>
          <PageContainer>
            <LeftSection />
            <RightSection />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
}
