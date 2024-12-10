import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
