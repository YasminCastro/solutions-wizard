import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import { PageContainer, PageWrapper } from "@/styles/Page";
import { NextPage } from "next";
import TopBar from "@/components/Global/TopBar";
import ProblemForm from "@/components/Pages/Problem";

const Problem: NextPage = () => {
  return (
    <>
      <SEO title="Problema" />
      <Layout>
        <PageWrapper>
          <PageContainer>
            <TopBar />
            <ProblemForm />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default Problem;
