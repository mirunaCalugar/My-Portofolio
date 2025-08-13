import React from "react";

/**
 * TextInput controlat, cu suport pentru eroare, helperText și validare.
 */
export default function TextInput({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error = false,
  helperText = "",
  required = false,
  pattern,
  inputMode,
}) {
  const inputId =
    id ||
    `input-${type}-${(label || "field")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")}`;
  const hintId = `${inputId}-hint`;

  const base = {
    padding: 8,
    fontSize: 14,
    borderRadius: 8,
    border: "1px solid #d1d5db",
     width: "250px",
    outline: "none",
    transition: "box-shadow .15s ease, border-color .15s ease",
  };
  const invalid = error
    ? { borderColor: "#ef4444", boxShadow: "0 0 0 3px rgba(239,68,68,.15)" }
    : { borderColor: "#d1d5db" };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 12, color: "#374151" }}>
          {label} {required && <span style={{ color: "#ef4444" }}>*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        pattern={pattern}
        inputMode={inputMode}
        aria-invalid={error || undefined}
        aria-describedby={helperText ? hintId : undefined}
        style={{ ...base, ...invalid }}
      />
      {helperText ? (
        <div id={hintId} style={{ marginTop: 4, fontSize: 12, color: error ? "#b91c1c" : "#6b7280" }}>
          {helperText}
        </div>
      ) : null}
    </div>
  );
}
