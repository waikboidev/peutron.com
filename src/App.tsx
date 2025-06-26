import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Main App Component
const App = () => {
    return (
        <div className="min-h-screen flex flex-col items-center p-4 md:p-8">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
};

export default App;
