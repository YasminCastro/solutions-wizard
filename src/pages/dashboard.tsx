import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import TopBar from "@/components/Pages/Dashboard/TopBar";
import { PageContainer, PageWrapper } from "@/styles/Page";
import SolutionsPanel from "@/components/Pages/Dashboard/SolutionsPanel";

export default function Dashboard() {
  return (
    <>
      <SEO title="Dashboard" />
      <Layout>
        <PageWrapper>
          <PageContainer>
            <TopBar />
            <SolutionsPanel />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
}
