import Avatar from "../../public/new.jpg";
import Image from "next/image";
import React from "react";

export default function ProfileLayout({ children }) {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center dark:bg-gray-900">
      <div className="container flex flex-col max-w-3xl">
        <div className="flex mx-auto p-6 justify-center">
          <div className="flex-shrink-0 relative">
            <Image className="h-16 w-16 sm:h-20 sm:w-20 rounded-full shadow" src={Avatar} alt={"Avatar"} />
            {/*<div className="absolute bottom-0 right-0 h-4 w-6 rounded z-20 border-2 border-white shadow trans-bg" />*/}
          </div>
          <div className="ml-6 flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row sm:space-x-2 items-baseline">
              <div className="text-xl md:text-2xl text-gray-900 dark:text-gray-100 leading-tight pb-1">
                Yanning Chen
              </div>
              <div className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
                E53E D56B 7F20 B7BB
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-tight md:leading-normal">
                CS undergraduate @SJTU-20.
              </div>
              <div
                className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-tight md:leading-normal md:ml-1">
                Coding with ♡.
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 pb-6 mx-auto">
          {/*<div className="px-6 pb-6 mx-auto max-w-lg md:max-w-xl">*/}
          {children}
        </div>
      </div>
    </div>
  );
}
