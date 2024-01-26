import { useId } from "react";

import { UiFieldLabel } from "./fields/ui-field-label";
import { UiFieldInput } from "./fields/ui-field-input";
import { UiFieldMessage } from "./fields/ui-field-message";

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
      {(helperText || errorText) && <UiFieldMessage helperText={helperText} errorText={errorText} />}
    </div>
  );
}
