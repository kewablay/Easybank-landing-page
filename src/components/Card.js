import React from "react";

function Card({ img, title, text, author, isServices }) {
  return (
    <div
      className={`flex flex-col align-middle space-y-3 ${
        isServices && "text-center"
      } mb-8 p-2 sm:text-left`}
    >
      <div className="mx-auto sm:mx-0 max-h-48 overflow-hidden">
        <img src={img} alt="" className="object-contain" />
      </div>
      <p className="text-primary_500">{author}</p>
      <h2
        className={`text-xl font-[500] ${
          !isServices && "hover:text-neutral_500 cursor-pointer"
        }`}
      >
        {title}
      </h2>
      <p className=" text-primary_500 font-[500]">{text}</p>
    </div>
  );
}

export default Card;
