"use client";

import AuthForm from "@/components/forms/AuthForm";
import { singInSchema } from "@/lib/validations";

const SignIn = () => {
  return (
    <AuthForm
      formType="Sign_In"
      schema={singInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ resolve: true, data })}
    />
  );
};

export default SignIn;
