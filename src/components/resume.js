import React from 'react'
import Line from '../image/line.png'
import { Section } from './Section'

export default function Resume() {
    return (
        <main id='Resume' style={{marginTop:'80px'}}>
            <div className='flx-direction-col aboutUsContainer isFlexed isCenteredCenter isCentered'>
                <h1>Resume</h1>
                <img src={Line} alt='line' />
                <Section style={{ gap: '20px', height: '100%', width: '100%', padding: '0 80px' }}>
                    <section className='aboutUsImageSection isFlexed isCenteredCenter' style={{ flex: '2', margin: '0 auto' }}>
                        <div className='line'></div>
                        <div>
                            <h4>2017</h4>
                            <h5>Louisanna State University</h5>
                            <p>Lorem Ipseum</p>
                            <h4 style={{ marginTop: '10px' }}>2018</h4>
                            <h5>Havard EdX</h5>
                            <p>Principles of Design</p>
                        </div>
                    </section>
                    <section className='aboutUsImageSection isFlexed isCenteredCenter' style={{ margin: '0 auto' }}>
                        <div className='line'></div>
                        <div>
                            <h4>2019</h4>
                            <h5>Udacity</h5>
                            <p >Product Design</p>
                            <h4 style={{ marginTop: '10px' }}>2020</h4>
                            <h5>Microsoft Partner</h5>
                            <p >Platinum</p>
                        </div>
                    </section>
                </Section>
            </div>
        </main>
    )
}
