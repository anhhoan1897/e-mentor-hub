import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/authen/register.scss";
import "../styles/authen/login.scss";
import "../styles/home/home.scss";
import "../styles/components.scss";
import "../styles/bootstrap.min.css";
import "react-big-calendar/lib/sass/styles.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { SSRProvider } from "@react-aria/ssr";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SSRProvider>
    </>
  );
}

export default MyApp;
