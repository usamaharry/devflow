"use client";
import Image from "next/image";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 text-dark200_light800 body-medium min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    await signIn(provider, { redirectTo: ROUTES.HOME, redirect: false });
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button onClick={() => handleSignIn("github")} className={buttonClass}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>

      <Button onClick={() => handleSignIn("google")} className={buttonClass}>
        <Image
          src="/icons/google.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
