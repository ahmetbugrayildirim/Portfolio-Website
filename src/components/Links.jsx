import logo from '/assets/logo.svg';

const Links = ({ className }) => (
  <nav className={className}>
    <div className="logo-container desktop">
      <a href="/">
        <img src={logo} alt="Logo" className="logo" />
      </a>
    </div>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/#projects">Projects</a></li>
      <li><a href="/#skills">Skills</a></li>
      <li><a href="/#contact">Contact</a></li>
    </ul>
  </nav>
);


export default Links;