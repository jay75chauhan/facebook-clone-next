import React from "react";
import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({ name, postImage, image, timestamp, message }) {
  return (
    <div className="flex flex-col ">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-md">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt="..."
          />
          <div>
            <p className="font-semibold">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading....</p>
            )}
          </div>
        </div>
        <p className="p-3 font-semibold  text-lg">{message}</p>
      </div>
      {postImage && (
        <div className="relative  h-60 md:h-96 bg-white">
          <Image src={postImage} object-fit="cover" layout="fill" />
        </div>
      )}
      <div className="flex justify-between  items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inoutIcon  rounded-bl-2xl">
          <ThumbUpIcon className="h-6" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inoutIcon   ">
          <ChatAltIcon className="h-6" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inoutIcon">
          <ShareIcon className="h-6" />
          <p className="text-xs sm:text-base rounded-br-2xl">Shar</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
