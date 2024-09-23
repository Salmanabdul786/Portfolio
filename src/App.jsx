import './app.scss'
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import Projects from './components/Projects/Portfolio';
import Skills from './components/Skills/Skills';

const App = () => {
  return <div>
  <section id= 'Homepage'>
    <Navbar/>
    <Main/>
  </section>
  <section  id='Skills'><Parallax type="Skills"/></section>
  <section><Skills/></section>
  <section id='Featured Works' ><Parallax type="Featured Works"/></section>
  <Projects  />
  <section id='Experience'><Experience/></section>
  
  <section id='Contact Me'><Contact/></section>

  </div>;
};

export default App;
