import React from 'react';
import { PersonalData } from "../../data/personal";
import "./personal-contact.css";
function PersonalContact() {
    const data = PersonalData;
    return (
     <div className="personal-contact">
        {data.map((item) => {
            return (
                <a href={item.link}>
                    <div className="personal-icon-div">
                        <img src={item.icon} className="personal-icon" />
                    </div>
                </a>    
            );
        })}
    </div>
    );
}
export default PersonalContact;