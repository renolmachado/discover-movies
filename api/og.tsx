import { ImageResponse } from '@vercel/og';
import React from 'react';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Get dynamic title if provided, otherwise use default
    const title = searchParams.get('title') || 'Watch it!';
    const description = searchParams.get('description') || 'Discover your next favorite movie';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: 100,
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: 30,
                fontFamily: 'Poppins, sans-serif',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 40,
                color: '#f0f0f0',
                fontFamily: 'Poppins, sans-serif',
                maxWidth: 900,
                lineHeight: 1.4,
              }}
            >
              {description}
            </p>
            <div
              style={{
                display: 'flex',
                marginTop: 50,
                fontSize: 30,
                color: '#ffffff',
                fontFamily: 'Poppins, sans-serif',
                opacity: 0.9,
              }}
            >
              🎬 Discover Movies • Rate & Save • Watch Later
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
