import React, { useEffect } from "react";
import { Title } from "../utils/Title";
import { Quote } from "../svg/Quote";
import AboutImg from "../../assets/img/fax.png";
import EmailSvg from "../../assets/img/email.png";
import GithubSvg from "../../assets/img/github.png";
import LinkedinSvg from "../../assets/img/linkedin.png";
import { Btn } from "../utils/Btn";
import Aos from "aos";

export function About({refs}) {

    useEffect(() => {
        Aos.init({duration:2000})
    },[])

    return(
        <div className="l-container" id="abouts" ref={refs}>
            <div className="about-section">
                <Title value="about me"/>
                <div className="about-description">
                    <Quotes className="quotes-left"/>
                    <p>I'm a Fullstack Developper who have skills on React Js and Spring. I'm abble to create any kind of website and ready for new challenges. Actually, I'm looking for new opportunities and open for collaboration on your projects.</p>
                    <Quotes className="quotes-right"/>
                </div>
                <div className="about-content">
                    <div className="about-image-container">
                        <div className="about-image-bg">
                        </div>
                        <div className="about-image">
                            <img src={AboutImg} alt="about's svg image" data-aos="fade-left"/>
                        </div>
                    </div>
                    <div className="social-media">
                        <SocialLink link="#" img={EmailSvg}>faniryram0@gmail.com</SocialLink>
                        <SocialLink link="#" img={GithubSvg}>faniryram0@gmail.com</SocialLink>
                        <SocialLink link="#" img={LinkedinSvg}>faniryram0@gmail.com</SocialLink>
                    </div>
                </div>
                <div className="about-btn">
                    <Btn>Download my CV</Btn>
                </div>
            </div>
        </div>
    )

}

function Quotes({className}) {
    return(
        <div className={className}>
            <Quote />
            <Quote />
        </div>
    )
}

function SocialLink({link,img,children}) {
    return(
        <a href={link} className="social-content">
            <div className="social-icon">
                <img src={img} alt="email svg" />
            </div>
            <div className="social-info">
                {children}
            </div>
        </a>
    )
}