import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

function Button({ className, ...props }: ComponentPropsWithoutRef<"button">) {
  const _className = twMerge(
    className,
    "appearance-none rounded-lg bg-aero_c1 p-2 text-sm font-medium text-white shadow transition-all hover:bg-aero_c2"
  );

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  );
}

export default Button;