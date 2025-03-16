import * as React from "react";
import { SVGProps } from "react";
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="#667F93"
      d="m20.78 12.94-6.75 6.75a.75.75 0 0 1-1.06-1.06l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.47a.75.75 0 1 1 1.06-1.06l6.75 6.75a.747.747 0 0 1 0 1.06Z"
    />
  </svg>
);
export default ArrowRight;
