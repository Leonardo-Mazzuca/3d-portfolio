import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };


  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setLoading(true);

    try {

      await emailjs.send(
        "service_42is4l6", 
        "template_hejekad",
        {
            from_name: form.name,
            from_email: form.email,
            to_email: "mazzuca2110@gmail.com",
            to_name: "Mazzuca",
            message: form.message,
        },
        'U14moSgyag_rowSRs'
    );

     

      alert('Your message has been sent!')

      setForm({
        name: "",
        email: "",
        message: "",
      })

      

    } catch (error) {

      console.log(error);
      alert('Something went wrong!')

    } finally {

        setLoading(false);
 

    }

  };

  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">


        <div className="contact-container">
          <h3 className="head-text">Vamos nos falar!</h3>

          <p className="text-lg text-white-600 mt-3">
            Eu estou disponível para trabalhos freelancer. E sempre aberto para novas
            oportunidades também! Caso ache meu trabalho interessante, sinta-se a vontade
            para me mandar um e-mail!
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Nome completo</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                required
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">E-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                required
                placeholder="johndoe@me.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Sua mensagem</span>
              <textarea
                name="message"
                value={form.message}
                //@ts-ignore
                onChange={handleChange}
                className="field-input"
                required
                placeholder="Olá Léo, eu gostaria de..."
                rows={5}
              />
            </label>

            <button disabled={loading} type="submit" className="field-btn">
              {loading ? "Enviando..." : "Enviar"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
