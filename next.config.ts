// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//   /* config options here */
//
//     /*output: 'export',*/
//     trailingSlash: true,
//     images: {
//         unoptimized: true,
//     },
// };
//
// export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
};

export default nextConfig;
