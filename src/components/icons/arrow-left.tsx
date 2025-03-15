import * as React from "react";
import { SVGProps } from "react";
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M21 12.91a.75.75 0 0 1-.75.75H5.56l5.47 5.47a.75.75 0 1 1-1.061 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 1 1 1.061 1.06l-5.47 5.47h14.69a.75.75 0 0 1 .75.75Z"
    />
  </svg>
);
export default ArrowLeft;
