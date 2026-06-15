import mail from '../../assets/email.svg';
import "./Footer.css";

const Footer = () => {
    return (

        <footer className="container" id="contact">

            <div className="footer">
                <h2 className="footer__title">Contact Me</h2>

                <div className="footer__icons">

                    <a
                        href="mailto:juan.toapanta01@epn.edu.ec"
                        className="fa-solid fa-envelope"
                        aria-label="Email"
                    ></a>

                    <a
                        href="https://github.com/sebxs29"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fab fa-github"
                        aria-label="GitHub"
                    ></a>

                    <a
                        href="https://wa.me/593984969316"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fab fa-whatsapp"
                        aria-label="WhatsApp"
                    ></a>

                </div>

                <p className="footer__copy">
                    © 2026 Juan Sebastián Toapanta. All rights reserved.
                </p>
            </div>

            <figure className="footer__img">
                <img
                    src={mail}
                    className="footer__picture"
                    alt="Contact illustration"
                />
            </figure>

        </footer>

    )
}

export default Footer