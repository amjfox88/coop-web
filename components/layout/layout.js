import Header from "/components/header";
import Footer from "/components/footer/footer";
import Sidebar from "/components/sidebar/sidebar";
import {useState} from "react";

function Layout({ children }) {
  const [show, showMenu] = useState(false);

  function showSideBar() {
    showMenu(true);
  }
  function closeSidebar() {
    showMenu(false);
  }
  return (
      <>
        <Sidebar closeSidebar={closeSidebar} show={show}/>
        <Header onBurgerClick={showSideBar}/>
        <main>{children}</main>
        <Footer/>
      </>
  )
}

export default Layout;