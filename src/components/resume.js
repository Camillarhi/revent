import React from 'react'
import Line from '../image/line.png'

export default function Resume() {
    return (
        <main id='Experience' style={{ marginTop: '80px' }}>
            <div className='flx-direction-col aboutUsContainer isFlexed isCenteredCenter isCentered'>
                <h1>Resume</h1>
                <img src={Line} alt='line' />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around',width:'100%',marginTop:'10px' }}>
                <section className='isFlexed' >
                        <div className='line'></div>
                        <div className='resumeSchool'>
                            <h4>2017</h4>
                            <h3>Louisanna State University</h3>
                            <p>Lorem Ipseum</p>
                            <h4 style={{ marginTop: '10px' }}>2018</h4>
                            <h3>Havard EdX</h3>
                            <p>Principles of Design</p>
                        </div>
                    </section>
                    <section className='isFlexed'>
                        <div className='line'></div>
                        <div className='resumeSchool'>
                            <h4>2019</h4>
                            <h3>Udacity</h3>
                            <p >Product Design</p>
                            <h4 style={{ marginTop: '10px' }}>2020</h4>
                            <h3>Microsoft Partner</h3>
                            <p >Platinum</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}
