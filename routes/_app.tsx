import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fre-deno-portfolio</title>
        <link rel="stylesheet" href="/styles.css" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha256-xwE/HO/IYekyn7lQyyN8hmhjhrhS2jFQGI0BO56Pog8="
          crossorigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha256-dfYVw70pCgTqQVG7hTXrHtr3BXfCkHn8KZD5Dhmupfg="
          crossorigin=""
        >
        </script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
