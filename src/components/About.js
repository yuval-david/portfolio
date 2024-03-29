// import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import Tools from './Tools';

export default function About() {

    return (
        <div className="about-component" id="about">
            <div className='about-container'>
                <div className='text-about'>
                    <div className='title-about'>
                        <h2>About Me</h2>
                        <div className='yuval-img'>
                            <img src={require('../img/yuval.jpg')} alt="yuval" />
                        </div>
                    </div>

                    <p>
                        Hello,
                        my name is Yuval<span role="img" aria-label='hello'>😊</span>
                        <br />
                        I'm a Full-stack web developer (frontend oriented).
                        <br />
                        I have a great passion for the field and a desire to progress and develop.
                        <br />

                    </p>
                    <ul>
                        <li>Currently, I am a student of Information systems at The Academic College of Tel Aviv-Yaffo.</li>
                        <li>Graduate Full Stack Developer course at John Bryce.</li>
                    </ul>
                </div>
                <div className='tools-about'>
                    <Tools />
                </div>
            </div>

        </div>
    )
}
