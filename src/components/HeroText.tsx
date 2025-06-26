import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import SocialLinks from './SocialLinks';

const HeroText = () => {
    const typedEl = useRef(null);

    // useEffect hook to initialize Typed.js after the component mounts
    useEffect(() => {
        const options = {
            strings: [
                'Map Maker.',
                'Event Host.',
                'YouTuber.',
                'Builder.'
            ],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
            smartBackspace: true,
        };
        
        // typedEl.current is the <span> element
        if (typedEl.current) {
            const typed = new Typed(typedEl.current, options);

            // Cleanup function to destroy Typed instance on unmount
            return () => {
                typed.destroy();
            };
        }
    }, []);

    return (
        // Add lg:order-first to make this the first item on large screens (left side)
        <div className="lg:col-span-2 text-center lg:text-left lg:order-first">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hey, I'm <span className="text-[#6EFA7A]">Peutron</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mt-4 h-10"> {/* Set fixed height to prevent layout shift */}
                <span ref={typedEl}></span>
            </p>
            
            <div className="mt-12">
               <h2 className="text-3xl font-bold border-b-4 border-[#6EFA7A] inline-block pb-2">About Me</h2>
               {/* I've removed the `font-sans` class from this <p> tag */}
               <p className="mt-6 text-base leading-relaxed text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec consequat justo. Proin a blandit purus. Vivamus mollis imperdiet rhoncus. Morbi blandit, sem eu consectetur malesuada, uma libero consequat quam, sed molestie diam erat vitae elit. Quisque id nisl lacinia mauris elementum.
               </p>
            </div>

            <SocialLinks />
        </div>
    );
};

export default HeroText;
