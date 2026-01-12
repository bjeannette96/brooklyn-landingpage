import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Portfolio/>
      <Blog/>
    </div>
  );
};

export default App;


