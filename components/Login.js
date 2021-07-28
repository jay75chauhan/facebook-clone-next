import React from "react";
import { signIn } from "next-auth/client";
import Head from "next/head";
import Image from "next/image";

function Login() {
  return (
    <div className=" flex h-screen  bg-gray-100 items-center justify-center">
      <Head>
        <title>Login Account</title>
        <meta name="description" content="login " />
        <link rel="icon" href="https://links.papareact.com/5me" />
      </Head>

      <div className="bg-white  shadow-lg rounded-3xl items-center justify-center p-12 sm:p-24  ">
        <div className="animate-bounce flex  items-center justify-center">
          <Image
            src="https://links.papareact.com/5me"
            height={150}
            width={150}
            object-fit="contain"
          />
        </div>
        <h1
          onClick={signIn}
          className="p-3 text-xl hover:text-gray-900 transition duration-200 transform ease-in hover:scale-105 hover:shadow-md mt-8  bg-blue-500  rounded-full text-white text-center cursor-pointer"
        >
          Login{" "}
        </h1>
        <a
          class=" mt-4  pl-32 text-red-500 no-underline md:hover:underline text-xs"
          href="https://github.com/jay75chauhan"
          target="_blank"
        >
          @jayChauhan
        </a>
      </div>
    </div>
  );
}

export default Login;
