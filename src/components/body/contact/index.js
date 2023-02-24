import React from 'react';
import Separator from '../../common/separator';
import "./contact.css";
function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">About</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Hi Folks I am Gajender Singh Bisht working in CRPF as a Cobra Commando and give my participation for serving our country from last 8 Years. I have done my Graduation from Delhi University.
                    <br/>
                    <br />Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; Gajender Singh Bisht
                    <br />Date of Birth &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; 10/02/1994
                    <br />Birth Time &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; 08:25&nbsp; (pm)
                    <br />Birth Place &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; Uttrakhand Nainital (Bana)
                    <br />Height &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; 5ft 8inch (173 cm)
                    <br />Weight &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; 70kg
                    <br />Blood Group &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; O+ve
                    <br />Relgion &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; Hinduism
                    <br />Cast &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; Rajput (Bisht)
                    <br />Rashi &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; Capricorn (Makar)
                    <br />Nakshatra &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; Rohini
                    <br />Complexion &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; Fair
                    <br />Gotra &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; Bhardwaj
                    <br />Mangala Dosha &nbsp; &nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; No
                    <br />Physical Status &nbsp; &nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; Normal
                        
                        </p>
                    <br />
                </div>
                {/* <div className="download">
                    <a download href={require('../../../assets/Resume_Vipin.pdf').default}>
                        <i class="fi-rr-download dowload-icon"></i>
                        Download Resume
                    </a>
                </div> */}
                <img src={require('../../../assets/myPic.jpeg').default} className="mypic" />
            </div>
        </div>
    )
}
export default Contact;