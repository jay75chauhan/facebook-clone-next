import React from "react";
import { signIn } from "next-auth/client";

import Image from "next/image";

function Login() {
  return (
    <div className=" flex h-screen  bg-gray-100 items-center justify-center">
      <div className="bg-white shadow-lg rounded-3xl  p-24 ">
        <Image
          src="https://links.papareact.com/5me"
          height={200}
          width={200}
          object-fit="contain"
        />
        <h1
          onClick={signIn}
          className="p-4 text-xl hover:text-gray-900 transition duration-200 transform ease-in hover:scale-105 hover:shadow-md mt-8  bg-blue-500  rounded-full text-white text-center cursor-pointer"
        >
          Login{" "}
        </h1>
        <p class="text-gray-500 mt-2 pr-2 text-right text-xs">@jayChauhan</p>
      </div>
    </div>
  );
}

export default Login;
