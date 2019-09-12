import React, { Component } from 'react'
import '../CSS/topbarCompany.css'
import { Divider, Button } from 'semantic-ui-react'

export default class Topbar extends Component {
    render() {
        return (
            
                <div className="heading">
                    <div className="verify">Verify.</div>
                    <Button className="button1">Log Out</Button>
                    <Divider className="line"/>
                </div>
                
                
            
        )
    }
}