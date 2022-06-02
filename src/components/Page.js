import React from 'react';
import Head from './Head';
import Navbar from './Navbar';
import About from './About';

export default function Page() {

    return (
        <div className="page-component">
            <Navbar />
            <Head />
            <About />
        </div>
    )
}
