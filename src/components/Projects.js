import React from 'react'
import data from "../data/data.json"
import "./projects.css"
import { useState } from 'react';
function Projects() {
    const [expandedInfo, setExpandedInfo] = useState([]);

    const toggleInfo = (index) => {
      if (expandedInfo.includes(index)) {
       
        setExpandedInfo(expandedInfo.filter((item) => item !== index));
      } else {
        
        setExpandedInfo([...expandedInfo, index]);
      }
    };

  return (
    <div>
       {data.map((info, key)=>(
        <div className='projects_wrapper'>
            <img src={info.img} alt="title"/>
            <div className='projects_info'>
                <h2>{info.title}</h2>
                <p>{info.description}</p>
                {expandedInfo.includes(key) && <p>{info.more_info}</p>}
                <button onClick={() => toggleInfo(key)}>
                {expandedInfo.includes(key) ? 'Скрыть' : 'Читать полностью'}
                </button>
            </div>
        </div>
       )
       )
    
       }
    </div>
    
  )
  
}

export default Projects