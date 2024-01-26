import { useId } from "react";

import { UiFieldLabel } from "./ui-field-label";
import { UiFieldMessage } from "./ui-field-message";
import { UiFieldInput } from "./ui-field-input";

/**
 * Text field component with label and error/helper message.
 *
 * @param {Object & import('react').HTMLAttributes<HTMLInputElement>} props - The props object.
 * @param {string} props.label - The label text.
 * @param {boolean} props.required - Indicates if the field is required.
 * @param {string} props.helperText - The helper text.
 * @param {string} props.errorText - The error text.
 * @param {string} props.className - The additional CSS classes for the component.
 * @returns {JSX.Element} The text field component.
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
      <UiFieldLabel label={label} required={required} htmlFor={id} />
      <UiFieldInput required={required} errorText={errorText} {...inputProps} id={id} />
      <UiFieldMessage helperText={helperText} errorText={errorText} />
    </div>
  );
}
