import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/authen/register.scss";
import "../styles/authen/login.scss";
import "../styles/home/home.scss";
import "../styles/components.scss";

import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import SelectRole from "../components/selectRole";

function MyApp() {
  return (
    <>
      <Header />
      <Banner/>
      <SelectRole />
      <Footer />
    </>
  );
}

export default MyApp;
