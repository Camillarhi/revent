import React from 'react'
import Line from '../image/line.png'
import { Section } from './Section'
import TopMail from '../image/topemail.png';
import BottomMail from '../image/bottomemail.png';
import CallLogo from '../image/call.png';
import Form from './form';
import { Button } from './Button';

export default function Contact() {
    return (
        <main id='Contact'>
            <div className='flx-direction-col aboutUsContainer isFlexed isCenteredCenter isCentered'>
                <h1>Get in Touch</h1>
                <img src={Line} alt='line' />
            </div>
            {/* aboutUsContainer Ends Here */}
            <Section style={{ gap: '20px', height: '100%' }}>
                <section className='aboutUsImageSection isFlexed isCenteredCenter contactSection isCentered'>
                    <div>
                        <img src={CallLogo} alt={CallLogo} />
                        <h3 style={{ marginRight: 'auto' }}>Call Us</h3>
                        <p>+234-806 749-700</p>
                    </div>
                    <div>
                        <div className='flx-direction-col isFlexed'>
                            <img src={TopMail} alt={TopMail} />
                            <img src={BottomMail} alt={BottomMail} />
                        </div>
                        <h3>Send Email</h3>
                        <p>revent@digital.com</p>
                    </div>
                </section>
            </Section>
            <Form/>
            <Button>Send message</Button>
        </main>
    )
}
