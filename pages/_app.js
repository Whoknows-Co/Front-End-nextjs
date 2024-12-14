import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
