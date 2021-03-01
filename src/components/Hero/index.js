import React,{useState} from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer,HeroContent,HeroH1,HeroBtn,HeroP,HeroItem} from './Hero';
import Bounce from 'react-reveal';

const Hero = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = ()=>setIsOpen(!isOpen);
    
    return (
        <HeroContainer>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroContent>
                <HeroItem>
                    <Bounce left cascade>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                    </Bounce>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
