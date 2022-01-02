import 'animate.css';
import React, { useState } from 'react';
import { Input, Form, FormGroup, Label } from 'reactstrap';
import './Home.css';
import './index.css';

function ContactForm() {

    const [emailState, setEmailState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [btnLabel, setBtnLabel] = useState('ENVOYER')

    function handleStateChange(e) {
        setEmailState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleClickSubmit = async (e) => {
        e.preventDefault()

        setBtnLabel('ENVOI EN COURS')

        let rawResponse = await fetch('/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emailState })
        })

        let response = await rawResponse.json();

        console.log('RESPONSE', response)

        if (response.status === 'success') {
            setBtnLabel('ENVOYE !')

            setEmailState({
                email: '',
                name: '',
                message: '',
            });
        }
    }

    return (
        <div style={{ textAlign: 'left', height: '100%', width: '75%', margin: '0 auto' }}>
            <Form action='/contact' method='POST'>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: '2rem' }}>
                    <FormGroup style={{ display: 'flex', flexDirection: 'column', width: '47%' }}>
                        <Label htmlFor="name">
                            NOM
                        </Label>
                        <Input
                            style={{ backgroundColor: 'transparent', color: '#8679DE', borderColor: '#8679DE', border: '3px solid #8679DE' }}
                            onChange={handleStateChange}
                            value={emailState.name}
                            id="name"
                            name="name"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup style={{ display: 'flex', flexDirection: 'column', width: '47%' }}>
                        <Label htmlFor="email">
                            EMAIL
                        </Label>
                        <Input
                            style={{ backgroundColor: 'transparent', color: '#8679DE', borderColor: '#8679DE', border: '3px solid #8679DE' }}
                            onChange={handleStateChange}
                            value={emailState.email}
                            id="email"
                            name="email"
                            type="email"
                        />
                    </FormGroup>
                </div>
                <FormGroup style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <Label htmlFor="message">
                        DITES-MOI TOUT !
                    </Label>
                    <Input
                        style={{ backgroundColor: 'transparent', color: '#8679DE', borderColor: '#8679DE', border: '3px solid #8679DE', height: '10em' }}
                        onChange={handleStateChange}
                        value={emailState.message}
                        id="message"
                        name="message"
                        type="textarea"
                    />
                </FormGroup>
                <button className='buttonSubmit' onClick={(e) => handleClickSubmit(e)}>{btnLabel}</button>
            </Form>
        </div>
    )
}

export default ContactForm;