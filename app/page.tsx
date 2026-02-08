'use client';

import { useState, useEffect } from 'react';

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);

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
    }, []);

    return (
        <div>
            {/* Header with Logo - CENTERED, NO PADDING */}
            <header style={{
                padding: '35px',
                backgroundColor: '#fff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img
                    src="/images/S.Silage.Logo.small.canvas.jpg"
                    alt="Southern Silage"
                    style={{ height: '200px', maxWidth: '100%', width: 'auto' }}
                />
                <div style={{
                    marginTop: '5px',
                    marginBottom: '20px',
                    fontSize: '24px',
                    color: '#2d5016',
                    fontWeight: '500'
                }}>
                    21956 Southwind Road, Andalusia, AL 36421
                </div>
            </header>

            {/* Photo Carousel - GREEN BACKGROUND, OVERLAPS LOGO */}
            <div style={{
                position: 'relative',
                height: '50vh',
                backgroundColor: '#4a7c2e',
                overflow: 'hidden',
                marginTop: '-40px'
            }}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Photo ${index + 1}`}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            opacity: currentImage === index ? 1 : 0,
                            transition: 'opacity 1.5s ease-in-out',
                            pointerEvents: 'none'
                        }}
                    />
                ))}
            </div>

            {/* Contact and Products - TIGHT SPACING */}
            <div style={{
                padding: '0px 20px 30px 20px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Contact - LARGER FONTS */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '10px',
                    padding: '10px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px'
                }}>
                    <h2 style={{ fontSize: '36px', color: '#2d5016', marginBottom: '15px', marginTop: '5px' }}>
                        Contact Us
                    </h2>
                    <div style={{ marginBottom: '12px', fontSize: '22px' }}>
                        <strong>Robert Waite:</strong> <a href="tel:334-343-6213" style={{ color: '#0066cc', textDecoration: 'none' }}>334-343-6213</a>
                    </div>
                    <div style={{ marginBottom: '15px', fontSize: '22px' }}>
                        <strong>Aarin Waite:</strong> <a href="tel:251-230-1745" style={{ color: '#0066cc', textDecoration: 'none' }}>251-230-1745</a>
                    </div>
                    <a
                        href="https://www.facebook.com/share/1DHjPQ7VEd/"
                        style={{
                            display: 'inline-block',
                            backgroundColor: '#1877f2',
                            color: 'white',
                            padding: '14px 40px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            marginTop: '5px',
                            fontSize: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        Visit us on Facebook
                    </a>
                </div>

                {/* Products */}
                <div style={{
                    padding: '15px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px'
                }}>
                    <h2 style={{ fontSize: '26px', color: '#2d5016', marginBottom: '12px', marginTop: '5px', textAlign: 'center' }}>
                        Products & Services
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '8px',
                        fontSize: '15px'
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
