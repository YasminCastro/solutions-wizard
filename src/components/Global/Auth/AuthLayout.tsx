import SEO from "../SEO";

const AuthLayout = (props: any) => (
  <>
    <SEO title="Criar nova senha" />
    <main>
      <div className="container">{props.children}</div>
    </main>
  </>
);

export default AuthLayout;
