
// App.jsx
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Process from "./components/Process/Process";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Process/>
      <Portfolio/>
      <Blog/>
      <Services/>
      <div className="bottom-page-wrapper" style={{ position: 'relative' }}>
        <Contact /> {/* Ou la section qui précède le formulaire */}
        <Form />
        <Footer />
      </div>
    </div>
  );
};

export default App;


