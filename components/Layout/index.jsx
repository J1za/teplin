import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, grey }) {
  return (
    <>
      {grey ? <Header grey={grey} /> : <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
