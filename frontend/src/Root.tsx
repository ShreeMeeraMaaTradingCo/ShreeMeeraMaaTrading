import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import PageTransition from "./components/PageTransition";

export default function Root() {
  return (
    <div className="root-container">
      <ScrollToTop />
      <Header />
      {/* <Header /> */}
      <main className="main-content">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
