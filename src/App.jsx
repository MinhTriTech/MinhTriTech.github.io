import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Activity from './components/Activity';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="trang-chu">
        <div className="container">
          <Hero />
          <About />
          <Projects />
          <Activity />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
