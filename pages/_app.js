import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/authen/register.scss";
import "../styles/authen/login.scss";
import "../styles/home/home.scss";
import "../styles/components.scss";

import NavigationHeader from "../components/navigation-header/navigation-header";
import NavigationFooter from "../components/navigation-footer/navigation-footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationHeader />
      <Component {...pageProps} />
      <NavigationFooter />
    </>
  );
}

export default MyApp;
