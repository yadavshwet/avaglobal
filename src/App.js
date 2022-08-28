import "./App.css";
import Home from "./components/home/Home";
import Analytics from "./components/analytics/Analytics";
import Navigation from "./components/navbar/Navigation";
import Message from "./components/message/Message";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="main-page">
      <Navigation />
      <Analytics />
      <Message />
      <News />
      <Contact />
    </div>
  );
}

export default App;
