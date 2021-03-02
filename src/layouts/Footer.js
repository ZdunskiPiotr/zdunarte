import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getYear() + 1900;

  return (
    <div className="footer__text">© Copyright {currentYear} Zduński Piotr</div>
  );
};

export default Footer;
