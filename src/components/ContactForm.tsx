import { useState, type FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const validarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const formatarTelefone = (valor: string) => {
    const numeroLimpo = valor.replace(/\D/g, "");
    if (numeroLimpo.length <= 10) {
      return numeroLimpo.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      return numeroLimpo.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, email, phone, service, message } = formData;

    if (!name || !email || !phone || !service || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!validarEmail(email)) {
      alert("E-mail inválido. Verifique e tente novamente.");
      return;
    }

    const numeroWhatsApp = "5585988518720"; // Coloque seu número aqui (formato internacional)
    const texto = `Olá, quero agendar uma consulta:
Nome: ${name}
Email: ${email}
Telefone: ${phone}
Serviço de interesse: ${service}
Mensagem: ${message}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      texto
    )}`;
    window.open(url, "_blank");

    alert("Obrigado pelo seu contato! Abrindo o WhatsApp...");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatarTelefone(value) : value,
    }));
  };

  return (
    <div
      id="consulta"
      className="w-full rounded-2xl shadow-lg p-6 mb-8"
      style={{ backgroundColor: "rgba(251,210,196,0.2)" }}
    >
      <h3 className="text-xl font-bold mb-4 text-center gradient-text">
        Agende uma Consulta
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="name"
          >
            Nome completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="phone"
          >
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            placeholder="(00) 00000-0000"
            maxLength={15}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="service"
          >
            Serviço de interesse
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          >
            <option value="">Selecione uma opção</option>
            <option value="pos-parto">Programa Pós-Parto</option>
            <option value="lpf">Low Pressure Fitness</option>
            <option value="personal">Personal Trainer</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="message"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            placeholder="Como posso te ajudar?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 gradient-bg text-white rounded-lg font-medium hover:opacity-90 transition-colors"
        >
          Enviar mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
