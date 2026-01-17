import type { NextConfig } from "next";

// Security headers untuk production
const productionSecurityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://vercel.live;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https: blob: https://images.unsplash.com;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://api.example.com https://vercel.live;
      media-src 'self' https:;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none'
  },
  {
    key: 'Cross-Origin-Embedder-Policy',
    value: 'require-corp'
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin'
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin'
  }
];

// Security headers untuk development (lebih permissive)
const developmentSecurityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self' 'unsafe-inline' 'unsafe-eval';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://vercel.live;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https: blob: https://images.unsplash.com;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://api.example.com https://vercel.live ws: wss:;
      media-src 'self' https:;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
    `.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer-when-downgrade'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // Tidak menggunakan Cross-Origin-Opener-Policy di development
  // untuk menghindari masalah dengan network access
];

const isDevelopment = process.env.NODE_ENV === 'development';
const securityHeaders = isDevelopment ? developmentSecurityHeaders : productionSecurityHeaders;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

};

export default nextConfig;