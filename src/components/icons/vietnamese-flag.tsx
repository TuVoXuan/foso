import * as React from "react";
import { SVGProps } from "react";
const VietnameseFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#D80027"
        d="M12.5 24.705c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Z"
      />
      <path
        fill="#FFDA44"
        d="m12.5 6.966 1.295 3.986h4.19l-3.39 2.463L15.89 17.4l-3.39-2.464-3.39 2.464 1.294-3.986-3.39-2.463h4.19L12.5 6.966Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5.705h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default VietnameseFlag;
