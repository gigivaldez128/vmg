import Navbar from './components/layout/Navbar';
import Hero from './features/hero/Hero';
import Gallery from './features/gallery/Gallery';
import About from './features/about/About';
import Slideshow from './features/slideshow/Slideshow';
import Quotes from './features/quotes/Quotes';

function App() {
  return (
    <div className="bg-background min-h-screen text-text-primary selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Slideshow />
        <Quotes />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-surface to-background py-12 border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-6">
            <span className="text-4xl mb-4 inline-block">💕</span>
            <h3 className="text-2xl font-bold font-heading mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Three Friends, One Bond
            </h3>
            <p className="text-text-secondary text-sm">Celebrating friendship, one memory at a time</p>
          </div>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6"></div>
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Made with 💕 by Three Best Friends. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
