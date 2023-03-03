import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import TopBar from "@/components/Pages/Dashboard/TopBar";
import { PageContainer, PageWrapper } from "@/styles/Page";
import SolutionsPanel from "@/components/Pages/Dashboard/SolutionsPanel";
import { GetServerSideProps, NextPage } from "next";
import { Software } from "@prisma/client";
import prisma from "@/lib/prisma";

interface DasboardInterface {
  softwares: Software[];
}

const Dashboard: NextPage<DasboardInterface> = ({ softwares }) => {
  return (
    <>
      <SEO title="Dashboard" />
      <Layout softwares={softwares}>
        <PageWrapper>
          <PageContainer>
            <TopBar />
            <SolutionsPanel />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async () => {
  const softwares = await prisma.software.findMany();

  return {
    props: { softwares },
  };
};
