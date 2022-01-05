import "../styles/globals.css";
import "../components/Row.module.css";
import "../components/Banner.module.css";
import "../components/Layout.module.css";
import "../components/Navbar.module.css";
import "../components/Footer.module.css";
import "../styles/Home.module.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
