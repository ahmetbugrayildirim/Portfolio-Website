import logo from '../assets/logo.svg';

const Links = ({ className }) => (
  <nav className={className}>
    <div className="logo-container desktop">
      <a href="/home">
        <img src={logo} alt="Logo" className="logo" />
      </a>
    </div>
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/home#projects">Projects</a></li>
      <li><a href="/home#skills">Skills</a></li>
      <li><a href="/home#contact">Contact</a></li>
    </ul>
  </nav>
);


export default Links;