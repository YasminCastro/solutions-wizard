import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import LeftPanel from "@/components/Global/LeftPanel";
import TopBar from "@/components/Pages/Dashboard/TopBar";
import { PageContainer, PageWrapper } from "@/styles/Page";

export default function Dashboard() {
  return (
    <>
      <SEO title="Dashboard" />
      <Layout>
        <PageWrapper>
          <PageContainer>
            <TopBar />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
}
