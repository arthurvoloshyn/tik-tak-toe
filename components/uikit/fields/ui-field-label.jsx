import clsx from "clsx";

/**
 * Label component for UiTextField.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The label text.
 * @param {boolean} props.required - Indicates if the field is required.
 * @param {string} props.htmlFor? - Specifies which form element a label is bound to.
 * @returns {JSX.Element|null} The label component.
 */
export function UiFieldLabel({ label, required, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        required && "after:text-orange-600 after:content-['*']",
        "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5"
      )}
    >
      {label}
    </label>
  );
}
