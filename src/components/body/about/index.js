import React from 'react';
import SocialContact from '../../common/social-contact';
import "./about.css";

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    <br />
                    𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞, 👋
                    <br />I'm <span className="info-name">Gajender Singh Bisht </span>🤗
                    <br />
                    <br />
                    <br />
                </div>
                {/* <div class="badge-base LI-profile-badge about-info" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="vipinkumar1313" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/vipinkumar1313?trk=profile-badge"></a></div> */}
                <div className="about-photo">
                    <img src={require('../../../assets/icons/b.jpeg').default} className="picture" />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}
export default About;