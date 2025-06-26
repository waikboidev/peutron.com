import HeroImage from './HeroImage';
import HeroText from './HeroText';

const Hero = () => {
    return (
        <main className="flex-grow flex items-center w-full max-w-7xl">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                    <HeroImage />
                    <HeroText />
                </div>
            </div>
        </main>
    );
};

export default Hero;
