const Footer = () => {
  return (
    <footer className="text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} Meiry Moreira Personal Trainer. Todos os direitos reservados.</p>
      <span className="text-xs">Desenvolvido com ❤️ por <a className="text-xs" href="https://bit.ly/whatsapp_thiagocosta">@thmoreiracosta</a></span>
    </footer>
  );
};

export default Footer;