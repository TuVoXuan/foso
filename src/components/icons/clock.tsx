import * as React from "react";
import { SVGProps } from "react";
const Clock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <path
      fill="#667F93"
      d="M12 2.66a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 12 2.66Zm0 18a8.25 8.25 0 1 1 8.25-8.25A8.26 8.26 0 0 1 12 20.66Zm6-8.25a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V7.16a.75.75 0 1 1 1.5 0v4.5h4.5a.75.75 0 0 1 .75.75Z"
    />
  </svg>
);
export default Clock;
