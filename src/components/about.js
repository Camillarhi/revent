import React from 'react'
import { Section } from './Section'
import Human from '../image/about.png'
import { Button } from './Button'
import Line from '../image/line.png'

export default function About() {
    return (
        <main id='About Us'>
            <div className='flx-direction-col aboutUsContainer isFlexed isCenteredCenter isCentered'>
                <h1>About Us</h1>
                <img src={Line} alt='line' />
            </div>
            {/* aboutUsContainer Ends Here */}
            <Section style={{ gap: '20px', height: '100%' }}>
                <section className='aboutUsImageSection isFlexed isCenteredCenter'>
                    <img src={Human} alt={Human} />
                </section>
                <section className='flx-direction-col isFlexed isCenteredCenter aboutTextPart'>
                    <h3 style={{ marginRight: 'auto' }}>We focus on value and excellence</h3>
                    <p style={{ marginTop: '10px' }}>
                        We are focused on providing products which deliver demonstrably good value for our
                        clients and end-customers – be that a specific return, outperforming an index or achieving
                        returns at lower risk.
                    </p>
                    <p style={{ marginTop: '30px' }}>
                        Through achieving value for the clients whose assets we manage, efficiently controlling costs,
                        effectiveness and efficiency, we deliver value to our shareholders and wider stakeholders
                    </p>
                    <Button>Work With Us</Button>
                </section>
            </Section>
        </main>
    )
}
