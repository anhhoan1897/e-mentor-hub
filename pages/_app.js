import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/authen/register.scss";
import "../styles/authen/login.scss";
import "../styles/home/home.scss";
import "../styles/about-us/aboutUs.scss";
import "../styles/components.scss";

import Header from "../components/header";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="page" style={{ marginTop: "110px" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
