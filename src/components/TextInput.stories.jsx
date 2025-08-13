import React, { useState } from "react";
import TextInput from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    id: { control: "text" },
    type: { control: { type: "select" }, options: ["text", "email", "password"] },
    placeholder: { control: "text" },
    required: { control: "boolean" },
    error: { control: "boolean" },
    helperText: { control: "text" },
    pattern: { control: "text" },
    inputMode: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: "TextInput pentru text, email și parolă, cu validare și afișare erori.",
      },
    },
  },
};

/* ========= 1) TEXT FĂRĂ NUMERE ========= */
export function TextFaraNumere(args) {
  const [value, setValue] = useState("");

  const validate = (val) => /^[^0-9]*$/.test(val);

  const onChange = (e) => {
    const next = e.target.value;
    setValue(next);
  };

  const onBlur = () => {
    const ok = validate(value);
    // nu folosim hooks SB; setăm eroarea doar local, via props compuse
  };

  const error = value !== "" && !validate(value);
  const helperText = error ? "Nu sunt permise cifre în acest câmp." : "";

  return (
    <TextInput
      {...args}
      type="text"
      inputMode="text"
      pattern="[^0-9]*"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
    />
  );
}
TextFaraNumere.args = {
  label: "Nume (fără cifre)",
  placeholder: "Ex: Ana Pop",
  required: true,
  error: false,
  helperText: "",
};

/* ========= 2) EMAIL CU VALIDARE LIVE ========= */
export function EmailCuValidareLive(args) {
  const [value, setValue] = useState("");

  const validate = (val) => /\S+@\S+\.\S+/.test(val);

  const onChange = (e) => {
    const next = e.target.value;
    setValue(next);
  };

  const onBlur = () => {
    /* doar forțăm mesajul să se afișeze dacă e gol sau invalid; logica e în `error` */
  };

  const error = value !== "" && !validate(value);
  const helperText = error ? "Te rugăm introdu un email valid (ex: nume@domeniu.com)" : "";

  return (
    <TextInput
      {...args}
      type="email"
      inputMode="email"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      placeholder={args.placeholder ?? "exemplu@email.com"}
    />
  );
}
EmailCuValidareLive.args = {
  label: "Email",
  required: true,
  error: false,
  helperText: "",
};

/* ========= 3) PAROLĂ CU VALIDARE ========= */
/* reguli: minim 8 caractere, cel puțin o literă mare și o cifră */
export function ParolaCuValidare(args) {
  const [value, setValue] = useState("");

  const validate = (val) =>
    val.length >= 8 && /[A-Z]/.test(val) && /\d/.test(val);

  const onChange = (e) => {
    const next = e.target.value;
    setValue(next);
  };

  const onBlur = () => {};

  const error = value !== "" && !validate(value);
  const helperText = error
    ? "Parola trebuie să aibă min. 8 caractere, o literă mare și o cifră."
    : "";

  return (
    <TextInput
      {...args}
      type="password"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      placeholder={args.placeholder ?? "Introdu parola"}
    />
  );
}
ParolaCuValidare.args = {
  label: "Parolă",
  required: true,
  error: false,
  helperText: "",
};
