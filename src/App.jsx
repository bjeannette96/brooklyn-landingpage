
// App.jsx
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Process from "./components/Process/Process";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <Process/>
      <Portfolio/>
      <Blog/>
    </div>
  );
};

export default App;


