import React from "react";

/**
 * Buton de submit cu stări: normal, disabled, error și loading.
 *
 * Props:
 * - label: textul din buton (ex: "Trimite")
 * - disabled: dezactivează butonul (și interacțiunile)
 * - isLoading: afișează spinner și blochează clickul
 * - error: stil de eroare (roșu)
 * - onClick: handler pentru click
 * - type: tipul butonului (implicit "submit")
 */
export default function SubmitButton({
  label = "Trimite",
  disabled = false,
  isLoading = false,
  error = false,
  onClick,
  type = "submit",
}) {
  const isDisabled = disabled || isLoading;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "10px 16px",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    border: "1px solid transparent",
    cursor: isDisabled ? "not-allowed" : "pointer",
    userSelect: "none",
    transition: "background-color .15s ease, border-color .15s ease, opacity .15s ease",
    minWidth: 120,
  };

  const colors = (() => {
    if (error) {
      return {
        background: "#ef4444", // roșu
        border: "#dc2626",
        text: "#fff",
        hover: "#dc2626",
      };
    }
    return {
      background: "#2563eb", // albastru
      border: "#1d4ed8",
      text: "#fff",
      hover: "#1d4ed8",
    };
  })();

  const style = {
    ...base,
    backgroundColor: colors.background,
    borderColor: colors.border,
    color: colors.text,
    opacity: isDisabled ? 0.6 : 1,
  };

  const spinner = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 50 50"
      role="img"
      aria-label="Se încarcă"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        d="M25 5 a20 20 0 0 1 0 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );

  return (
    <button
      type={type}
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled || undefined}
      aria-busy={isLoading || undefined}
      style={style}
      onMouseOver={(e) => {
        if (!isDisabled) e.currentTarget.style.backgroundColor = colors.hover;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = colors.background;
      }}
    >
      {isLoading && spinner}
      <span style={{ lineHeight: 1 }}>{label}</span>
    </button>
  );
}
