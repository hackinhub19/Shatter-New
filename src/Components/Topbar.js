import React, { Component } from 'react'
import '../CSS/topbar.css'
import { Divider, Button } from 'semantic-ui-react'

export default class Topbar extends Component {
    render() {
        return (
            <div>
                <div className="heading">
                    <div className="verify">Verify.</div>
                    <Button className="button1">Home</Button>
                    <Button className="button2">About Us</Button>
                    <Button className="button3">Contacts Us</Button>
                    <Divider />
                </div>
                
                </div>
            
        )
    }
}