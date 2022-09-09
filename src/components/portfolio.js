import React from 'react'
import Line from '../image/line.png'
import PortfolioImage from '../image/portfolio.png'
import Portfoliomenu from './portfoliomenu'

export default function Portfolio() {
    return (
        <main id='Portfolio' style={{ marginTop: '80px' }}>
            <div className='flx-direction-col aboutUsContainer isFlexed isCenteredCenter isCentered'>
                <h1>Portfolio</h1>
                <img src={Line} alt='line' />
            </div>
            <Portfoliomenu />
            {/* <Section style={{ gap: '20px', height: '100%' }}> */}
                <section className='portfolio'>
                    <img src={PortfolioImage} alt={PortfolioImage} />
                    <img src={PortfolioImage} alt={PortfolioImage} />
                    <img src={PortfolioImage} alt={PortfolioImage} />
                </section>
            {/* </Section> */}
        </main>
    )
}
