import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import TopBarSearchProblems from "@/components/Global/TopBarSearchProblems";
import { PageContainer, PageWrapper } from "@/styles/Page";
import SolutionsPanel from "@/components/Pages/Dashboard/SolutionsPanel";
import { NextPage } from "next";
import { useRouter } from "next/router";
import EmptySolutionsPanel from "@/components/Pages/Dashboard/EmptySolutionsPanel";

const Dashboard: NextPage = () => {
  const { query } = useRouter();
  return (
    <>
      <SEO title="Dashboard" />
      <Layout>
        <PageWrapper>
          <PageContainer>
            <TopBarSearchProblems />
            {query.softwareId ? <SolutionsPanel /> : <EmptySolutionsPanel />}
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default Dashboard;
