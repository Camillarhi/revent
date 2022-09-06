import React from 'react'
import Line from '../image/line.png'
import { Section } from './Section'

export default function Resume() {
    return (
        <main id='Resume'>
            <div className='flx-direction-col aboutUsContainer isFlexed isCenteredCenter isCentered'>
                <h1>Resume</h1>
                <img src={Line} alt='line' />
                <Section style={{ gap: '20px', height: '100%' }}>
                    <section className='aboutUsImageSection isFlexed isCenteredCenter'>
                        <div className='line'></div>
                        <div>
                            <h4>2017</h4>
                            <h5>Louisanna State University</h5>
                            <p>Lorem Ipseum</p>
                            <h4>2018</h4>
                            <h5>Havard EdX</h5>
                            <p>Principles of Design</p>
                        </div>
                    </section>
                    <section className='aboutUsImageSection isFlexed isCenteredCenter'>
                        <div className='line'></div>
                        <div>
                            <h4>2019</h4>
                            <h5>Udacity</h5>
                            <p >Product Design</p>
                            <h4>2020</h4>
                            <h5>Microsoft Partner</h5>
                            <p >Platinum</p>
                        </div>
                    </section>
                </Section>
            </div>
        </main>
    )
}
