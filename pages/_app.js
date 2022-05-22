import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-modern-drawer/dist/index.css";

import React from "react";
import NavBar from "../components/NavBar";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
