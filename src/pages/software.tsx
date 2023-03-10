import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import { PageContainer, PageWrapper } from "@/styles/Page";
import { NextPage } from "next";
import TopBar from "@/components/Global/TopBar";
import SoftwareForm from "@/components/Pages/Software";

const Software: NextPage = () => {
  return (
    <>
      <SEO title="Softwares" />
      <Layout>
        <PageWrapper>
          <PageContainer>
            <TopBar />
            <SoftwareForm />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
};

export default Software;
