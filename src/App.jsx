import './App.css';
import About from './components/About';
import DailySpecial from './components/DailySpecial';
import Home from './components/Home';
import Layout from './components/Layout';
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Testimonial />
      <DailySpecial />
      {/* <Menu /> */}
    </Layout>
  );
}

export default App;
