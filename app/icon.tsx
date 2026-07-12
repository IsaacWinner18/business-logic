import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Business Logic Favicon';
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          borderRadius: '20%',
          color: '#ffffff',
          fontSize: '20px',
          fontWeight: 700,
          fontFamily: 'sans-serif',
        }}
      >
        BL
      </div>
    ),
    {
      ...size,
    }
  );
}
