import Company from "./componants/Companies/Company";
import Contact from "./componants/Contact/Contact";
import Footer from "./componants/Footer/Footer";
import GetStarted from "./componants/GetStarted/GetStarted";
import Header from "./componants/Header/Header";
import Hero from "./componants/Hero/Hero";
import Residency from "./componants/Residencies/Residency";
import Value from "./componants/Values/Value";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Company />
      <Residency />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
