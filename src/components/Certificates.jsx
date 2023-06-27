import React from "react";
import Carousel from "./Carousel";

export const Certificates = () => {
  return (
    <div
      id="certificates"
      className="bg-corFundo2 w-full pt-[10vh] pb-3 flex flex-col items-center gap-5"
    >
      <h2 className="text-blue-500 font-bold text-[1.4rem] min-[1920px]:text-[2rem]">
        CERTIFICATES
      </h2>

      <div>
        <Carousel />
      </div>
    </div>
  );
};
