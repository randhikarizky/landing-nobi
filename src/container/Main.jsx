import React, { Component } from 'react'

import '../components/style/index.scss'

import Navbar from '../components/pages/navs/Navbar'
import SectionOne from '../components/pages/sections/Section1'
import SectionTwo from '../components/pages/sections/Section2'
import SectionThree from '../components/pages/sections/Section3'
import SectionFour from '../components/pages/sections/Section4'
import SectionFive from '../components/pages/sections/Section5'
import SectionSix from '../components/pages/sections/Section6'
import Footer from '../components/pages/navs/Footer'
import SectionSeven from '../components/pages/sections/Section7'

export class Main extends Component {
    render() {
        return (
            <>
                <Navbar />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <div className="blue-bar"></div>
                <SectionSix />
                <SectionSeven />
                <Footer />
            </>
        )
    }
}

export default Main
