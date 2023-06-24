import Navbar from "./Navbar";
import Footer from './Footer';
import HomePage from "./HomePage";
//import Clock from "./Clock";


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