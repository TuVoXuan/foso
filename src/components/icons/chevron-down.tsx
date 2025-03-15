import * as React from "react";
import { SVGProps } from "react";
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#25272A"
      d="m13.854 7.059-5 5a.502.502 0 0 1-.707 0l-5-5a.5.5 0 0 1 .707-.708L8.5 10.998l4.646-4.647a.5.5 0 0 1 .708.708Z"
    />
  </svg>
);
export default ChevronDown;
