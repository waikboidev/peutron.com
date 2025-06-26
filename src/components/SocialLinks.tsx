import React from 'react';

// Social Links Component
const SocialLinks = () => {
    const socialMedia = [
        { name: 'YouTube', url: 'https://youtube.com/@Peutron', icon: 'fa-youtube', color: 'hover:text-[#FF0000]' },
        { name: 'Discord', url: 'https://discord.gg/7wVYppAKrc', icon: 'fa-discord', color: 'hover:text-[#5865F2]' },
        { name: 'Patreon', url: 'https://www.patreon.com/c/Peutron/', icon: 'fa-patreon', color: 'hover:text-[#f96854]' },
    ];

    return (
        <div className="flex justify-center lg:justify-start space-x-6 mt-8">
            {socialMedia.map((social) => (
                <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-3xl md:text-4xl text-gray-400 transition-transform duration-300 transform hover:scale-125 ${social.color}`}
                    aria-label={social.name}
                >
                    <i className={`fab ${social.icon}`}></i>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
