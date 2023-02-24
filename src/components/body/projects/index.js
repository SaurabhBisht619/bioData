import React from 'react';
import Separator from '../../common/separator';
import "./projects.css";


function Projects (){
    return (
        <div className="projects">
            <Separator />
           <label className="section-title">Contect Us  &nbsp; &nbsp; &nbsp;📲</label>
           <div>
               <h2>Myself: &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<span>📞 9423855461</span></h2> 
               <h2>Father: &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<span>📞 8750175145</span></h2> 
               <h2>Mother: &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<span>📞 8810474539</span></h2> 
               <h2>Brother: &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<span>📞 9667546371 </span></h2> 
           </div>
        </div>
    )
}
export default Projects;