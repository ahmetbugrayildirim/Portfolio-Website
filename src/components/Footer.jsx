import Links from './Links';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Links  className="footer-mobile" />

  <nav className="footer-desktop">
          <ul className="social-media-footer">
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="mailto:ahmet.bugra.yildirim02@gmail.com"><i className="far fa-envelope"></i></a></li>
          </ul>
          <ul className="footer-name">
            <li>@Ahmet Bugra Yildirim - 2024</li>
          </ul>
          <ul className="top-button">
            <li><a href="/home">Top</a></li>
          </ul>
        </nav>
      
    </footer>
  );
};

export default Footer;
