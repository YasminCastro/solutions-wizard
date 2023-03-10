import { useState } from "react";
import Router from "next/router";
import { useUser } from "@/providers/user";
import AuthLayout from "@/components/Global/Auth/AuthLayout";
import AuthForm from "@/components/Global/Auth/AuthForm";

const Signup = () => {
  useUser({ redirectTo: "/", redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (errorMsg) setErrorMsg("");

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        Router.push("/");
      } else {
        throw new Error(await res.text());
      }
    } catch (error: any) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message);
    }
  }

  return (
    <AuthLayout>
      <div className="login">
        <AuthForm
          isLogin={false}
          errorMessage={errorMsg}
          onSubmit={handleSubmit}
        />
      </div>
    </AuthLayout>
  );
};

export default Signup;
