import Navbar from "./Navbar";
import Footer from './Footer';
import HomePage from "./HomePage";



const Layout = ({ children }) => {
      return (
      <div>
            <Navbar />
            { children }
            <HomePage />
            <Footer />
      </div>

        );
}
 
export default Layout;