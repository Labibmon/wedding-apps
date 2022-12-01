const Manifest = () => <></>;
export default Manifest;

export async function getServerSideProps({ req, res }) {
  const body = `
    {
      "name": "Wedding Apps Anggi and Labib",
      "short_name": "Anggi Labib",
      "description": "Wedding Apps Anggi and Labib",
      "theme_color": "hsl(325, 78%, 13%)",
      "background_color": "hsl(325, 78%, 13%)",
      "display": "fullscreen",
      "orientation": "portrait",
      "scope": "/",
      "start_url": "/invitation",
      "icons": [
          {
              "src": "/icon-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "/icon-256x256.png",
              "sizes": "256x256",
              "type": "image/png"
          },
          {
              "src": "/icon-384x384.png",
              "sizes": "384x384",
              "type": "image/png"
          },
          {
              "src": "/icon-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
      ],
      "splash_pages": null
    }
  `.trim();

  res.writeHead(200, {
    "Content-Length": Buffer.byteLength(body),
    "Content-Type": "application/json",
  });
  res.write(body);
  res.end();

  return { props: {} };
}