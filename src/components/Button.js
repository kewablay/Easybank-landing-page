import React from "react";

function Button({ text }) {
  return (
    <a
      href="#"
      className="px-6 py-3 bg-gradient-to-r from-neutral_500 to-neutral_100 rounded-full text-secondary_100 font-bold hover:brightness-125"
    >
      {text}
    </a>
  );
}

export default Button;
