import React from 'react';
import { useEffect } from "react";

export default function Contact() {


    useEffect(() => {
        const blackIcons = document.querySelectorAll(".social-icons .icon-div a");
        const iconsDivs = document.querySelectorAll(".social-icons .icon-div");

        blackIcons.forEach((btn, index) => {
            btn.addEventListener('mouseover', () => {
                console.log("in");
                iconsDivs[index].classList.add("color");
            });
            btn.addEventListener('mouseout', () => {
                console.log("out");
                iconsDivs[index].classList.remove("color");
            });
        });
    }, [])



    return (
        <div className="contact-component" id="contact">
            <div className='contact-container'>
                <h2>Contact</h2>

                <div className='contact-flex'>
                    <div className='content-div'>
                        <p>Feel free to contact me!</p>
                        <div className='social-icons'>
                            <div className='icon-div'>
                                <a href="https://www.linkedin.com/in/yuval-david-52720a186/" target="_blank">
                                    <img className='black-icon' src={require('../img/icons/linkedin.png')} />
                                    <img src={require('../img/icons/linkedin-c.png')} />
                                </a>
                            </div>
                            <div className='icon-div'>
                                <a href="https://github.com/yuval-david" target="_blank">
                                    <img className='black-icon' src={require('../img/icons/github.png')} />
                                    <img src={require('../img/icons/github-c.png')} />
                                </a>
                            </div>
                            <div className='icon-div'>
                                <a href="mailto:yuvid0224@gmail.com?subject=Mail from Yuval Site" target="_blank">
                                    <img className='black-icon' src={require('../img/icons/mail.png')} />
                                    <img src={require('../img/icons/mail-c.png')} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='phone-gif'>
                        <img src={require('../img/pink-calling.gif')} />
                    </div>
                </div>



            </div>


            <div className='footer'>
                © 2022 Copyright: Yuval Websites
            </div>
        </div>
    )
}
