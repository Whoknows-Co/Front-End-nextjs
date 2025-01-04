import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import "../styles/globals.css";
import LoginContextProvider from "../context/LoginContextProvider";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LoginContextProvider>
          <Header />
          <ToastContainer position="bottom-right" rtl />
          <Component {...pageProps} />
          <Footer />
        </LoginContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
