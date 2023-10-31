import React from 'react'
import l1 from "../Assets/Group 175880.png"
import s1 from "../Assets/S1.svg"
import "uikit/dist/js/uikit-icons.min.js"; 
import { Help,Notification,Flash,WatsonHealthStudyNext,TaskView,UserMultiple,Rocket,Chat,Home,IbmEventProcessing } from '@carbon/icons-react';

const Sidebar = () => {
  return (
    <div >
      <div className='uk-flex uk-flex-between sidebar'>

      <div>
        <img src={l1}/>
      
        <ul className='bar' style={{listStyleType:'none' , paddingLeft:'0px'}}>
          <li><a><Home size={22}/></a> </li>
          <li><a><Chat size={22}/></a> </li>
          <li><a><IbmEventProcessing size={22}/></a> </li>
          <li><a><Rocket size={22}/> </a> </li>
          <li><a><UserMultiple size={22}/></a> </li>
          <li><a><TaskView size={22}/></a> </li>
          <li><a><WatsonHealthStudyNext size={22}/> </a></li>
          <li><a><Flash size={22}/> </a></li>
          <li><a><Home size={22}/></a> </li>
        </ul>
      </div>
      
      <div className='barbtm'>
        
      <img src={s1}></img>
      
      <ul className='bar' style={{listStyleType:'none' , paddingLeft:'0px'}}>
      <li><a><Notification size={25}/></a></li>
      <li><a><Help size={25}/></a></li>
      </ul>      
      </div>
      </div>
    </div>
  )
}

export default Sidebar