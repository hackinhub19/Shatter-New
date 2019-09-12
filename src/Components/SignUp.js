import React, { Component } from 'react'
import { Form, Container } from 'semantic-ui-react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'
import '../CSS/signUp.css'

class SignUp extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })
    selectCountry(val) {
        this.setState({ country: val });
    }

    render() {
        const { value } = this.state;
        const { country, region } = this.state;
        return (
            <Container align="center" className="formContainer">
                <Form align="center">
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='COMPANY NAME:' placeholder='Please enter your company name' />
                        <Form.Input fluid label='REGISTER NUMBER OF YOUR COMPANY' placeholder='Please enter a valid register number' />
                    </Form.Group>
                    <Form.Group widths='equal' inline>
                        <label>ADDRESS:</label>
                        <Form.Input fluid label='PLACE' placeholder='street or layout' className='addressField' />
                        <Form.Input fluid label='CITY' placeholder='' className='addressField' />
                        <Form.Input fluid label='STATE' placeholder='Please enter State your company name' className='addressField' />
                        <CountryDropdown
                            value={country}
                            onChange={(val) => this.selectCountry(val)} />
                    </Form.Group>

                    <Form.TextArea label='About' placeholder='Please give describe the service you offer/products manucatured.' />
                    <Form.Button color='olive'>Submit</Form.Button>

                </Form>
            </Container>
        )
    }
}

export default SignUp;
