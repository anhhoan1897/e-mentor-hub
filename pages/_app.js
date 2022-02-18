import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/authen/register.scss";
import "../styles/authen/login.scss";
import "../styles/home/home.scss";
import "../styles/about-us/aboutUs.scss";
import "../styles/components.scss";

import { SSRProvider } from "@react-aria/ssr";
import Header from "../components/Header";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Header />
      <div className="page" style={{ marginTop: "110px" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
