import React from 'react'
import Portfoliomenu from './portfoliomenu'
import PortfolioImage from '../image/portfolio.png'
import Line from '../image/line.png'
import { Section } from './Section'

export default function Portfolio() {
    return (
        <main id='Portfolio'>
            <div className='flx-direction-col aboutUsContainer isFlexed isCenteredCenter isCentered'>
                <h1>Portfolio</h1>
                <img src={Line} alt='line' />
            </div>
            <Portfoliomenu />
            {/* aboutUsContainer Ends Here */}
            <Section style={{ gap: '20px', height: '100%' }}>
                <section className='aboutUsImageSection isFlexed isCenteredCenter'>
                    <img src={PortfolioImage} alt={PortfolioImage} />
                    <img src={PortfolioImage} alt={PortfolioImage} />
                    <img src={PortfolioImage} alt={PortfolioImage} />
                </section>
            </Section>
        </main>
    )
}
