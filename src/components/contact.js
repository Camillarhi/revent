import React from 'react';
import BottomMail from '../image/bottomemail.png';
import CallLogo from '../image/call.png';
import Line from '../image/line.png';
import TopMail from '../image/topemail.png';
import Form from './form';
import Ring1 from '../image/ring1.png';
import Ring2 from '../image/ring2.png';
import Ring3 from '../image/ring3.png';
import { Section } from './Section';

export default function Contact() {
    return (
        <main id='Contact' style={{ marginTop: '80px' }}>
            <div className='flx-direction-col aboutUsContainer isFlexed isCenteredCenter isCentered'>
                <h1>Get in Touch</h1>
                <img src={Line} alt='line' />
            </div>
            <Section style={{ gap: '20px', height: '100%' }}>
                <section className='isFlexed isCenteredCenter contactSection isCentered'>
                    <div className='contact-image'>
                        <div className='flx-direction-col isFlexed'>
                            <img style={{ width: '13.79px', height: '13.79px' }} src={Ring1} alt={Ring1} />
                            <img style={{ width: '9.56px', height: '9.56px' }} src={Ring2} alt={Ring2} />
                            <img style={{ width: '5.52px', height: '5.52px' }} src={Ring3} alt={Ring3} />
                            <img style={{ width: '40px', height: '40px' }} src={CallLogo} alt={CallLogo} />
                        </div>
                        <h3>Call Us</h3>
                        <p>+234-806 749-700</p>
                    </div>
                    <div className='contact-image'>
                        <div className='flx-direction-col isFlexed message'>
                            <img src={TopMail} alt={TopMail} />
                            <img src={BottomMail} alt={BottomMail} />
                        </div>
                        <h3>Send Email</h3>
                        <p>revent@digital.com</p>
                    </div>
                </section>
            </Section>
            <Form />
        </main>
    )
}
