import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import { PageContainer, PageWrapper } from "@/styles/Page";
import { NextPage } from "next";
import TopBar from "@/components/Global/TopBar";
import ProblemForm from "@/components/Pages/Problem";
import { useRouter } from "next/router";

const Problem: NextPage = () => {
  const router = useRouter();

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
