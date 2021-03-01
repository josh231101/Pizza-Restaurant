import React from 'react'
import {SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap} from './Sidebar';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer onClick={toggle} isOpen={isOpen}>
            <Icon >
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarMenu>
                <SidebarLink 
                    to="pizza"
                    smooth={true}
                    duration={500}
                    onClick={toggle}
                    >Pizzas</SidebarLink>
                <SidebarLink 
                    to="desserts"
                    smooth={true}
                    duration={500}
                    onClick={toggle}
                    >Desserts</SidebarLink>
                <SidebarLink
                    to="menu"
                    smooth={true}
                    duration={500}
                    onClick={toggle}
                >Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
            
        </SidebarContainer>
    )
}

export default Sidebar
