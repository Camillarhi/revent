import React from 'react';
import "./resume.css";
import Title from '../title/title';

export default function Resume() {
    return (
        <>
            <Title title='Resume' />
            <div className='resume-div'>
                <div>
                    <div className='resume-child-div'>
                        <div className='line'></div>
                        <div>
                            <h4 className='date'>2017</h4>
                            <h5 className='location'>Louisanna State University</h5>
                            <p className='details'>Lorem Ipseum</p>
                        </div>
                    </div>
                    <div className='resume-child-div'>
                        <div className='line'></div>
                        <div>
                            <h4 className='date'>2018</h4>
                            <h5 className='location'>Havard EdX</h5>
                            <p className='details'>Principles of Design</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='resume-child-div'>
                        <div className='line'></div>
                        <div>
                            <h4 className='date'>2019</h4>
                            <h5 className='location'>Udacity</h5>
                            <p className='details'>Product Design</p>
                        </div>
                    </div>
                    <div className='resume-child-div'>
                        <div className='line'></div>
                        <div>
                            <h4 className='date'>2020</h4>
                            <h5 className='location'>Microsoft Partner</h5>
                            <p className='details'>Platinum</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
