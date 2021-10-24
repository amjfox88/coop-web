import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import Image from 'next/image'

export default function CookiesConsent () {
  const styles = {
    fontFamily: "SF Pro Text",
    background: "#fff",
    color: "#121473",
    width: "345px",
    position: "fixed",
    left: "initial",
    right: "126px",
    top: "initial",
    padding: "24px",
    borderRadius: "10px",
    marginBottom: "80px",
    boxShadow: "0px 4px 10px rgba(18, 20, 115, 0.4)"
  }
  const buttonStyles = {
    color: "#262AF2",
    fontFamily: "SF Pro Display Bold",
    fontSize: "16px",
    border: "0",
    backgroundColor: "white",
    padding: 0,
    cursor: "pointer"
  }
  const contentStyle = {
    marginBottom: "24px"
  }

  return (
      <>
        <CookieConsent
            location="bottom"
            buttonText="Aceptar"
            cookieName="_elevenlab"
            style={styles}
            buttonStyle={buttonStyles}
            contentStyle={contentStyle}
            expires={1}
            disableStyles={true}
        >
          Al utilizar este sitio web, acepta nuestro uso de cookies. Usamos cookies para brindarle una gran experiencia y para ayudar a que nuestro sitio web funcione de manera eficaz.{" "}
          <span style={{ position: "absolute", bottom: "22px", left: "95px" }}> <FontAwesomeIcon icon={faArrowCircleRight} color={'#262AF2'} style={{width: "14px", height: "14px"}}/></span>
          <span style={{ position: "absolute", bottom: "20px", right: "20px" }}><Image alt="coop bot image" src={"/images/coop-bot.png"} width={40} height={50}/></span>
        </CookieConsent>
      </>
  )
}