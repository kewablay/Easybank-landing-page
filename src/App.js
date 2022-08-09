import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App overflow-x-hidden 2xl:container 2xl:mx-auto">
      <Navbar />
      <Header />
      <Services />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
