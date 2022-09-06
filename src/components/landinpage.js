import React from 'react'
import { Section } from './Section';
import RealWorld from '../image/hex.png';
import YelloBlob from '../image/diagonal.png';
import BehanceLogo from '../image/Be.png'
import DribbleLogo from '../image/web.png'
import FacebookLogo from '../image/F.png'
import { Button } from './Button';

export default function Landinpage() {
    const socialLogos = [
        BehanceLogo,
        DribbleLogo,
        FacebookLogo
    ]
    return (
        <Section >
            <section className='isFlexed heroSection'>
                <h1>Inovative Solution</h1>
                <h1>Tailored to your</h1>
                <h1>Business need</h1>
                <p>We can partner with your business to provide a
                    symbiotic relationship and synergy to help you or your
                    business achieve more business growth through strategic
                    financial advisory, investment business and human resource
                    planning and management.
                </p>
                <Button>Get in touch</Button>
                <div className='isFlexed'>

                    {socialLogos.map((socialLogo, index) => (
                        <div key={index} className='isCentered socialLogo'>
                            <img src={socialLogo} alt={socialLogo} />
                        </div>
                    ))}
                </div>
            </section>
            <section className='isCenteredCenter isFlexed isCentered secondHeroContainer'>
                <img src={YelloBlob} alt='heroImage' />
                <img src={RealWorld} alt='heroImage' />
            </section>
        </Section>
    )
}
