import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import TopBarSearch from "@/components/Global/TopBarSearch";
import { PageContainer, PageWrapper } from "@/styles/Page";
import SolutionsPanel from "@/components/Pages/Dashboard/SolutionsPanel";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <>
      <SEO title="Dashboard" />
      <Layout>
        <PageWrapper>
          <PageContainer>
            <TopBarSearch />
            <SolutionsPanel />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default Dashboard;
