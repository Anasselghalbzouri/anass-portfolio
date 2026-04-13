<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Adjust the allowed_origins to match your frontend URL in production.
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    // FIX [BUG #5]: explicit method list instead of wildcard; add FRONTEND_URL env var for production domain
    'allowed_methods' => ['GET', 'POST', 'OPTIONS'],

    'allowed_origins' => array_filter([
        'http://localhost:5173',   // Vite dev server
        'http://localhost:3000',   // Alternative dev port
        env('FRONTEND_URL'),       // Set in .env for production, e.g. https://anass-portfolio.com
    ]),

    'allowed_origins_patterns' => [],

    // FIX [BUG #5]: explicit header list instead of wildcard
    'allowed_headers' => ['Content-Type', 'Accept', 'Authorization', 'X-Requested-With'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
