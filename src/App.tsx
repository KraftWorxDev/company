import type { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const App: Component = () => {

  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Routes>
  );

};

export default App;
