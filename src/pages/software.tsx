import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import { PageContainer, PageWrapper } from "@/styles/Page";
import { NextPage } from "next";
import TopBar from "@/components/Global/TopBar";
import SoftwareForm from "@/components/Pages/Software";
import { useUser } from "@/providers/user";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Software: NextPage = () => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <SEO title="Softwares" />
      {user && (
        <Layout>
          <PageWrapper>
            <PageContainer>
              <TopBar />
              <SoftwareForm />
            </PageContainer>
          </PageWrapper>
        </Layout>
      )}
    </>
  );
};

export default Software;
