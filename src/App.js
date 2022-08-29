import "./App.css";
import Home from "./components/home/Home";
import Analytics from "./components/analytics/Analytics";
import Navigation from "./components/navbar/Navigation";
import Message from "./components/message/Message";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="main-page">
      <Navigation />
      <Home />
      <Analytics />
      <Message />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
