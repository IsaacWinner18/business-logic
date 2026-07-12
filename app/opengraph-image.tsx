import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Business Logic';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fdfbf7', // Our primary light background
          position: 'relative',
        }}
      >
        {/* Subtle noise/texture simulation with CSS gradients */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0, 0, 0, 0.05) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        />

        {/* Floating gradient orb for premium aesthetic */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(232, 220, 201, 0.8) 0%, rgba(253, 251, 247, 0) 70%)',
            borderRadius: '50%',
          }}
        />

        {/* The BL Logo Mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200px',
            height: '200px',
            backgroundColor: '#000000',
            color: '#ffffff',
            fontSize: '90px',
            fontWeight: 800,
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            marginBottom: '40px',
            letterSpacing: '-0.05em',
            fontFamily: 'sans-serif', // In an actual setup, we could load our local font here
          }}
        >
          BL
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: '64px',
            fontWeight: 700,
            color: '#000000',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            lineHeight: 1.2,
            fontFamily: 'sans-serif',
          }}
        >
          Business Logic
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            fontSize: '32px',
            fontWeight: 400,
            color: '#666666',
            marginTop: '20px',
            textAlign: 'center',
            letterSpacing: '0.01em',
            fontFamily: 'sans-serif',
          }}
        >
          Premium Web Development Agency
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
