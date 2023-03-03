import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import { PageContainer, PageWrapper } from "@/styles/Page";
import SolutionsPanel from "@/components/Pages/Dashboard/SolutionsPanel";
import { GetServerSideProps, NextPage } from "next";
import { Software } from "@prisma/client";
import prisma from "@/lib/prisma";
import TopBar from "@/components/Global/TopBar";

interface DasboardInterface {
  softwares: Software[];
}

const Software: NextPage<DasboardInterface> = ({ softwares }) => {
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

export default Software;

export const getServerSideProps: GetServerSideProps = async () => {
  const softwares = await prisma.software.findMany();

  return {
    props: { softwares },
  };
};
