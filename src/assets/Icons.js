import React from "react";
import { Theme } from "../utils";

export const ReverseL = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="33"
      fill="none"
      viewBox="0 0 34 33"
    >
      <path fill="#fff" d="M21 0h12.5v33H0V20.5h21V0z"></path>
    </svg>
  );
};

export const Quotes = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="20"
      fill="none"
      viewBox="0 0 26 20"
    >
      <path
        fill="#008753"
        d="M21.953.422c1.094 0 1.64.219 1.64.656 0 .188-.171.344-.515.469-2.875 1.156-4.312 3.406-4.312 6.75.437-.063.75-.094.937-.094 3.75 0 5.625 1.875 5.625 5.625 0 3.719-1.875 5.578-5.625 5.578-4.344 0-6.515-2.39-6.515-7.172 0-5.156 2.078-8.859 6.234-11.109.875-.469 1.719-.703 2.531-.703zM9.72.562c1.094 0 1.64.22 1.64.657 0 .187-.171.343-.515.468C7.969 2.845 6.53 5.095 6.53 8.438a7.61 7.61 0 01.938-.093c3.75 0 5.625 1.875 5.625 5.625 0 3.719-1.875 5.578-5.625 5.578-4.344 0-6.516-2.39-6.516-7.172 0-5.156 2.078-8.86 6.234-11.11C8.063.798 8.908.564 9.72.564z"
      ></path>
    </svg>
  );
};

export const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="18"
      fill="none"
      viewBox="0 0 10 18"
    >
      <path
        fill="#8692A6"
        d="M9.863 2.225L8.379.75.138 9l8.25 8.25 1.475-1.475L3.088 9l6.775-6.775z"
      ></path>
    </svg>
  );
};

export const Pentagon = ({ hover }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="48"
      fill="none"
      viewBox="0 0 50 48"
    >
      {hover ? (
        <path
          stroke={Theme.primary}
          strokeWidth="1.4"
          d="M1.095 18.233L25 .865l23.905 17.368-9.131 28.101H10.226l-9.13-28.101z"
        ></path>
      ) : (
        <path
          fill={Theme.primary}
          d="M25 0l24.727 17.966-9.445 29.068H9.718L.273 17.966 25 0z"
        ></path>
      )}
    </svg>
  );
};

export const Developer = ({ hover }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={hover ? Theme.white : Theme.primary}
        fillRule="evenodd"
        d="M3.72 12.887a4.167 4.167 0 012.947-1.22h6.666a4.167 4.167 0 014.167 4.166V17.5a.833.833 0 01-1.667 0v-1.667a2.5 2.5 0 00-2.5-2.5H6.667a2.5 2.5 0 00-2.5 2.5V17.5a.833.833 0 01-1.667 0v-1.667c0-1.105.439-2.165 1.22-2.946zM10 3.333a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-4.167 2.5a4.167 4.167 0 118.334 0 4.167 4.167 0 01-8.334 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Bussiness = ({ hover }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      fill="none"
      viewBox="0 0 20 18"
    >
      <path
        fill={hover ? Theme.white : Theme.primary}
        fillRule="evenodd"
        d="M3.333 5.667A.833.833 0 002.5 6.5v8.333c0 .46.373.834.833.834h13.334c.46 0 .833-.373.833-.834V6.5a.833.833 0 00-.833-.833H3.333zm-2.5.833a2.5 2.5 0 012.5-2.5h13.334a2.5 2.5 0 012.5 2.5v8.333a2.5 2.5 0 01-2.5 2.5H3.333a2.5 2.5 0 01-2.5-2.5V6.5z"
        clipRule="evenodd"
      ></path>
      <path
        fill={hover ? Theme.white : Theme.primary}
        fillRule="evenodd"
        d="M6.565 1.399A2.5 2.5 0 018.333.667h3.334a2.5 2.5 0 012.5 2.5V16.5a.833.833 0 01-1.667 0V3.167a.833.833 0 00-.833-.834H8.333a.833.833 0 00-.833.834V16.5a.833.833 0 01-1.667 0V3.167a2.5 2.5 0 01.732-1.768z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Tick = ({ white }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="8"
      fill="none"
      viewBox="0 0 10 8"
    >
      <path
        fill={white ? Theme.white : Theme.primary}
        fillRule="evenodd"
        d="M9.425.702a.833.833 0 010 1.179L4.253 7.298a.833.833 0 01-1.179 0l-2.5-2.5a.833.833 0 111.179-1.179l1.91 1.91L8.248.703a.833.833 0 011.178 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const SafeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="14"
      fill="none"
      viewBox="0 0 10 14"
    >
      <path
        fill={Theme.lightBody}
        fillRule="evenodd"
        d="M7.917 4.958H8.5a1.17 1.17 0 011.167 1.167v5.833A1.17 1.17 0 018.5 13.125h-7a1.17 1.17 0 01-1.167-1.167V6.125A1.17 1.17 0 011.5 4.958h.583V3.792a2.918 2.918 0 015.834 0v1.166zM5 2.042c-.968 0-1.75.781-1.75 1.75v1.166h3.5V3.792c0-.969-.782-1.75-1.75-1.75zm-3.5 9.916V6.125h7v5.833h-7zm4.667-2.916A1.17 1.17 0 015 10.208a1.17 1.17 0 01-1.167-1.166A1.17 1.17 0 015 7.875a1.17 1.17 0 011.167 1.167z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
