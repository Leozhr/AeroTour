import ptBR from "date-fns/locale/pt-BR";
import { LegacyRef, forwardRef } from "react";
import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from "react-datepicker";
import { twMerge } from "tailwind-merge";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("pt-BR", ptBR);

interface InputProps extends ReactDatePickerProps {
  error?: boolean;
  errorMessage?: string;
}

function DatePickerInput(
  { className, error, errorMessage, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  const inputClassName = twMerge(
    className,
    "rounded-lg border border-gray-300 bg-white p-2 text-sm font-semibold text-aero_c2 placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-aero_c1",
    error ? "border-red-500" : ""
  );

  return (
    <div className="flex w-full flex-col">
      <DatePicker
        locale="pt-BR"
        wrapperClassName="w-full"
        className={inputClassName}
        enableTabLoop={false}
        {...props}
      />
      {error && errorMessage && (
        <div className="mt-1 text-xs text-red-500">{errorMessage}</div>
      )}
    </div>
  );
}

export default forwardRef(DatePickerInput);