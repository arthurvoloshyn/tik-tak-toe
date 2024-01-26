import { useId } from "react";
import clsx from "clsx";

import { UiFieldLabel } from "./fields/ui-field-label";
import { UiFieldInput } from "./fields/ui-field-input";

/**
 * @param {{
 * label?: string,
 * helperText?: string,
 * errorText?: string,
 * error?: string,
 * className: string,
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 */
export function UiTextField({
  label,
  required,
  helperText,
  errorText,
  className,
  ...inputProps
}) {
  const id = useId();

  return (
    <div className={className}>
      {label && <UiFieldLabel label={label} required={required} htmlFor={id} />}
      <UiFieldInput required={required} errorText={errorText} id={id} {...inputProps} />
      {(helperText || errorText) && (
        <p
          className={clsx(
            "mt-1 text-sm ",
            errorText ? "text-orange-600" : "text-slate-400"
          )}
        >
          {errorText ?? helperText}
        </p>
      )}
    </div>
  );
}
