import { Provider } from "react-redux";
import { ParallaxProvider } from "react-scroll-parallax";

import Layout from "components/Layout";

import { useStore } from "store";

import "../styles/style.scss";
import '../components/common/CustomSelect/Select.css'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <ParallaxProvider>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </ParallaxProvider>
  );
}

export default MyApp;
