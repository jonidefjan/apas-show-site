import React, { useState }  from 'react'

import {Tab, Tabs } from 'react-bootstrap'

import Dezenove from './Dezenove'
import Vinte from './Vinte'
import Vinteum from './Vinteum'

const Dias = () =>{
  const [key, setKey] = useState('dezenove');
    
  return (
    <Tabs justify defaultActiveKey="dezenove" id="congressos" activeKey={key} onSelect={k => setKey(k)} className="congressosTabs">
          <Tab eventKey="dezenove" title="19/05" className="congressosTab">
            <Dezenove />
          </Tab>
          <Tab eventKey="vinte" title="20/05" className="congressosTab">
            <Dezenove />
          </Tab>
          <Tab eventKey="vinteum" title="21/05" className="congressosTab">
            <Dezenove />
          </Tab>
    </Tabs>
  )
}
export default Dias