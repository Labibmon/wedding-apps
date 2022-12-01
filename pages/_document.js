
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon-192x192.png" />
                    <meta name="theme-color" content="hsl(325, 78%, 13%)" media="(prefers-color-scheme: light)" />
                    <meta name="theme-color" content="hsl(325, 78%, 13%)" media="(prefers-color-scheme: dark)" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;