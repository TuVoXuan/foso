import * as React from "react";
import { SVGProps } from "react";
const Calendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.5 3.41h-2.25v-.75a.75.75 0 1 0-1.5 0v.75h-7.5v-.75a.75.75 0 0 0-1.5 0v.75H4.5A1.5 1.5 0 0 0 3 4.91v15a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-15a1.5 1.5 0 0 0-1.5-1.5ZM6.75 4.91v.75a.75.75 0 1 0 1.5 0v-.75h7.5v.75a.75.75 0 1 0 1.5 0v-.75h2.25v3h-15v-3h2.25Zm12.75 15h-15V9.41h15v10.5Z"
    />
  </svg>
);
export default Calendar;
