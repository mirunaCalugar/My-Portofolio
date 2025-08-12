import { useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // aici ai integrare reală (email/API). Deocamdată simulăm:
    setTimeout(() => setSent(true), 400);
  }

  if (sent) {
    return (
      <section className="page fade-in">
        <h2>Mulțumesc! ✅</h2>
        <p>Ți-am înregistrat mesajul. Revin cât pot de repede.</p>
      </section>
    );
  }

  return (
    <section className="page">
      <h2>Contact</h2>
      <form className="card form" onSubmit={handleSubmit}>
        <label>
          Nume
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Numele tău"
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="nume@email.com"
            required
          />
        </label>

        <label>
          Mesaj
          <textarea
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            placeholder="Salut! Aș vrea să…"
            required
          />
        </label>

        <button className="btn" type="submit">Trimite</button>
      </form>
    </section>
  );
}
