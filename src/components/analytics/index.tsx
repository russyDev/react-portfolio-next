// app/analytics.tsx
'use client';

import Script from "next/script";

export default function AnalyticsG() {
    const code = 'G-Q86M1RLJRQ';
    return (
        <>
            {/* Google tag (gtag.js) */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${code}`}
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${code}');
        `}
            </Script>
        </>
    );
}
