import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import TopBarSearchProblems from "@/components/Global/TopBarSearchProblems";
import { PageContainer, PageWrapper } from "@/styles/Page";
import SolutionsPanel from "@/components/Pages/Dashboard/SolutionsPanel";
import { NextPage } from "next";
import { useRouter } from "next/router";
import EmptySolutionsPanel from "@/components/Pages/Dashboard/EmptySolutionsPanel";
import TopBarSearchSoftwares from "@/components/Pages/Dashboard/EmptySolutionsPanel/TopBarSearchSoftwares";
import { useUser } from "@/providers/user";
import { useEffect } from "react";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <SEO title="Dashboard" />
      {user && (
        <Layout>
          <PageWrapper>
            <PageContainer>
              {router.query.softwareId ? (
                <>
                  <TopBarSearchProblems />
                  <SolutionsPanel />
                </>
              ) : (
                <>
                  <TopBarSearchSoftwares />
                  <EmptySolutionsPanel />
                </>
              )}
            </PageContainer>
          </PageWrapper>
        </Layout>
      )}
    </>
  );
};

export default Dashboard;
