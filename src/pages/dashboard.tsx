import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import LeftPanel from "@/components/Pages/Dashboard/LeftPanel";
import { PageContainer, PageWrapper } from "@/styles/Page";

export default function Dashboard() {
  return (
    <>
      <SEO title="Dashboard" />
      <Layout>
        <PageWrapper>
          <PageContainer>
            <LeftPanel />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
}
