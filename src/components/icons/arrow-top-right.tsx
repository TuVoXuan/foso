import * as React from "react";
import { SVGProps } from "react";
const ArrowTopRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    viewBox="0 0 23 23"
    fill="none"
    {...props}
  >
    <rect width={22} height={22} x={0.5} y={0.705} fill="#000" rx={11} />
    <path
      fill="#fff"
      d="M15.438 8.205v5.688a.438.438 0 0 1-.875 0V9.26L8.31 15.515a.438.438 0 0 1-.62-.62l6.254-6.252H9.313a.437.437 0 1 1 0-.876H15a.437.437 0 0 1 .438.438Z"
    />
  </svg>
);
export default ArrowTopRight;
