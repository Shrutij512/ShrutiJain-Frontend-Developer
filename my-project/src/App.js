import './App.css';
import EventDiv from './Components/EventDiv';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import Roadmap from './Components/Roadmap';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <EventDiv />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
