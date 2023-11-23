import Header from '../components/Header';
import Footer from '../components/Footer';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div className="Layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;