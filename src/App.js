import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Process from "./Components/Process";
import Testimonials from "./Components/Testimonials";
import ContactUs from "./Components/ContactUs";
import Usp from "./Components/Usp";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Process/>
      <Testimonials/>
      <ContactUs/>
      <Usp/>
      <Footer/>
    </div>
    

    // <div className="bg-red-200 text-center">Hello</div>
  );
}

export default App;
