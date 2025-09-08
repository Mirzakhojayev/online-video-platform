import {UserCircleIcon} from "lucide-react";
import React from "react";
import {Button} from "./ui/button";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button className='px-6 py-4 text-md font-medium rounded-full cursor-pointer border border-[#1D1D1D] bg-[#1D1D1D]'>
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default AuthButton;
