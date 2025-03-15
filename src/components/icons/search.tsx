import * as React from "react";
import { SVGProps } from "react";
const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="#fff"
      d="m21.53 20.88-4.693-4.694a8.26 8.26 0 1 0-1.06 1.06l4.693 4.695a.75.75 0 1 0 1.06-1.062ZM3.75 10.91a6.75 6.75 0 1 1 6.75 6.75 6.758 6.758 0 0 1-6.75-6.75Z"
    />
  </svg>
);
export default Search;
