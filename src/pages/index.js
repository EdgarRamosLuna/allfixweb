import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WppBtn from '../components/helpers/WppBtn';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section4 from '../components/Section4';
import { Section3S } from '../styles/Main';

export default function Index(){
    return(
        <>
            <Header />
            <WppBtn />
            <Section1 />
            <Section2 />
            <Section4 />
            <Footer />
        </>
    )
}