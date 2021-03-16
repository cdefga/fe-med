import React from 'react'
import github from '../../images/github.jpeg'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-text-left"> © 2021: Viettel Cyberspace center </p>
            <div className="footer-content-right">
                <a href="https://vtcc.vn/" target="_blank">
                    <img
                        src={github}
                        className="icon-style"
                        alt="Github icon"
                        target="blank"
                    />
                </a>
            </div>
            <div className="footer-content-right">
                <a href="https://vtcc.vn/" target="_blank">
                    <img
                        src={linkedin}
                        className="icon-style"
                        alt="Linkedin icon"
                    />
                </a>
            </div>
            <div className="footer-content-right">
                <a href="https://vtcc.vn/" target="_blank">
                    <img
                        src={instagram}
                        className="icon-style"
                        alt="Instagram icon"
                    />
                </a>
            </div>
        </div>
    )
}

export default Footer
