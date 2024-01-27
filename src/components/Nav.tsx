import React from "react";

export const Nav = ({ date }) => {
  return (
    <nav className="fixed h-16 w-full px-8 bg-gray opacity-90 flex items-center z-20">
      <ul className="flex justify-between w-full text-black">
        <li>{date}</li>
        <li>
          <a href="https://docs.google.com/document/d/17w2puyu3VCHmuhmsA3JsC6PqpHIvPoetGjrwn0OsNBk/edit?usp=sharing">
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
