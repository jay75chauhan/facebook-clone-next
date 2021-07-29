import React from "react";
import { signIn } from "next-auth/client";
import Head from "next/head";
import Image from "next/image";

function Login() {
  return (
    <div className=" flex h-screen bg  bg-gradient-to-br from-gray-700 to-gray-200 items-center justify-center">
      <Head>
        <title>Login Account</title>
        <meta name="description" content="login " />
        <link rel="icon" href="https://links.papareact.com/5me" />
      </Head>

      <div className="bg-gray-500  drop-shadow-2xl  rounded-2xl items-center justify-center p-12 sm:p-24  ">
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
          className="p-3 text-xl font-bold hover:text-gray-900 transition duration-200 transform ease-in hover:scale-105 hover:shadow-md mt-8  bg-blue-500  rounded-full text-white text-center cursor-pointer"
        >
          Login{" "}
        </h1>
        <a
          class=" mt-4  pl-32 text-gray-400 hover:text-gray-500 hover:underline no-underline md:hover:underline text-xs"
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
