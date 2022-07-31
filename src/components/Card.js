import React from "react";

function Card({ img, title, text, altText, isArticle }) {
  return (
    <div className="flex flex-col align-middle space-y-3 text-center mb-8 p-2 sm:text-left">
      <div className="mx-auto sm:mx-0">
        <img src={img} alt="" />
      </div>
      <p>{altText}</p>
      <h2 className="text-xl font-[500]">{title}</h2>
      <p className=" text-primary_500 font-[500]">{text}</p>
    </div>
  );
}

export default Card;
