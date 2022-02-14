import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Header />
      {/* <div className="container mx-0   md:mx-[120px]"> */}
      <Component {...pageProps} />
      {/* </div> */}
      <Footer />
    </>
  );
}

export default MyApp;
