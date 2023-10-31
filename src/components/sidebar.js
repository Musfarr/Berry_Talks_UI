import React from 'react'
import l1 from "../Assets/Group 175880.png"
import s1 from "../Assets/S1.svg"
import "uikit/dist/js/uikit-icons.min.js"; 
import { IbmEventProcessing } from '@carbon/icons-react';
import { Home } from '@carbon/icons-react';
import { Chat } from '@carbon/icons-react';
import { Rocket } from '@carbon/icons-react';
import { UserMultiple } from '@carbon/icons-react';
import { TaskView } from '@carbon/icons-react';
import { WatsonHealthStudyNext } from '@carbon/icons-react';
import { Flash } from '@carbon/icons-react';
import { Notification } from '@carbon/icons-react';
import { Help } from '@carbon/icons-react';

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
          <li><a></a><Home size={22}/> </li>
        </ul>
      </div>
      
      <div className='barbtm'>
      {/* <img src={s1}></img> */}
      <ul className='bar' style={{listStyleType:'none' , paddingLeft:'0px'}}>
      <li><Notification size={25}/></li>
      <li><Help size={25}/></li>
      </ul>      
      </div>
      </div>
    </div>
  )
}

export default Sidebar