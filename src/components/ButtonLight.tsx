import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

function ButtonLight({ className, ...props }: ComponentPropsWithoutRef<"button">) {
  const _className = twMerge(
    "appearance-none border-2 border-aero_c1 rounded-lg text-aero_c1 p-3 text-sm font-semibold shadow transition-all hover:text-aero_c2 hover:border-aero_c2 ",
     className
  );

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  );
}

export default ButtonLight;