'use client';

import { useState, useEffect } from 'react';

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);

    // Placeholder images - replace with actual image paths
    const images = [
        '/images/Southern.Silage.1.jpg',
        '/images/Southern.Silage.3.jpg',
        '/images/Southern.Silage.4.jpg',
        '/images/Southern.Silage.7.jpg',
        '/images/Southern.Silage.8.jpg',
        '/images/Southern.Silage.9.jpg',
        '/images/Southern.Silage.10.jpg',
        '/images/Southern.Silage.12.jpg',
        '/images/Southern.Silage.13.jpg',
        '/images/Southern.Silage.14.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            {/* Header with Logo */}
            <header style={{
                padding: '20px',
                backgroundColor: '#fff',
                borderBottom: '2px solid #2d5016'
            }}>
                <img
                    src="/images/Southern.Silage.logo.jpg"
                    alt="Southern Silage"
                    style={{ height: '80px' }}
                />
            </header>

            {/* Photo Carousel - Takes most of screen */}
            <div style={{
                position: 'relative',
                height: '70vh',
                backgroundColor: '#000',
                overflow: 'hidden'
            }}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Photo ${index + 1}`}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: currentImage === index ? 1 : 0,
                            transition: 'opacity 1s ease-in-out'
                        }}
                    />
                ))}
            </div>

            {/* Contact and Products Section */}
            <div style={{
                padding: '40px 20px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <h1 style={{
                    fontSize: '36px',
                    color: '#2d5016',
                    marginBottom: '20px',
                    textAlign: 'center'
                }}>
                    Southern Silage, LLC
                </h1>

                {/* Contact */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                    padding: '20px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px'
                }}>
                    <h2 style={{ fontSize: '24px', color: '#2d5016', marginBottom: '15px' }}>
                        Contact Us
                    </h2>
                    <div style={{ marginBottom: '10px' }}>
                        <strong>Robert Waite:</strong> <a href="tel:334-343-6213" style={{ color: '#0066cc' }}>334-343-6213</a>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <strong>Aarin Waite:</strong> <a href="tel:251-230-1745" style={{ color: '#0066cc' }}>251-230-1745</a>
                    </div>
                    <a
                        href="#"
                        style={{
                            display: 'inline-block',
                            backgroundColor: '#1877f2',
                            color: 'white',
                            padding: '10px 30px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            marginTop: '10px'
                        }}
                    >
                        Visit us on Facebook
                    </a>
                </div>

                {/* Products */}
                <div style={{
                    padding: '20px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px'
                }}>
                    <h2 style={{ fontSize: '24px', color: '#2d5016', marginBottom: '15px', textAlign: 'center' }}>
                        Products & Services
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '10px',
                        fontSize: '14px'
                    }}>
                        <div>• UpNorth Silage Bags</div>
                        <div>• Net & Twine</div>
                        <div>• Pit Covers</div>
                        <div>• Inoculant</div>
                        <div>• In-Line Bale Wrappers</div>
                        <div>• Secure Covers</div>
                        <div>• Meyer Boxes & Bodies</div>
                        <div>• Sunfilm Wrap</div>
                        <div>• Silage Baggers</div>
                        <div>• Tatoma Mixers</div>
                        <div>• Reinke Irrigation</div>
                        <div>• K-Line Irrigation</div>
                        <div>• CowCo</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
