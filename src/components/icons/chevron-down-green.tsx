import * as React from "react";
import { SVGProps } from "react";
const ChevronDownGreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <path
      fill="#15AA7A"
      d="M3.704 8.614a1.125 1.125 0 0 1 1.594 0L12 15.316l6.704-6.702a1.127 1.127 0 1 1 1.594 1.594l-7.5 7.5a1.127 1.127 0 0 1-1.594 0l-7.5-7.5a1.125 1.125 0 0 1 0-1.594Z"
    />
  </svg>
);
export default ChevronDownGreen;
