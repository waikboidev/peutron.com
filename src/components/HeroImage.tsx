const HeroImage = () => {
    return (
        <div className="lg:col-span-3 flex justify-center items-center">
            <div className="relative w-full max-w-md xl:max-w-lg">
                {/* Image placed in the `public` folder */}
                <img 
                    src="/imgs/peutron_flipped.png"
                    alt="Peutron Minecraft Skin" 
                    className="w-full h-full object-contain transform transition-transform duration-500 hover:scale-105" 
                    style={{ imageRendering: 'pixelated' }} /* Keeps the pixel art sharp */
                />
            </div>
        </div>
    );
};

export default HeroImage;
