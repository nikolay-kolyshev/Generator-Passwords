import React from "react"
import logo from "../../assets/images/logo.svg"
import {HeaderStyled, LogoWrapper} from "./style/HeaderStyle"

const Header = () => {

    return (
        <HeaderStyled style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <LogoWrapper>
                <img src={logo}/>
            </LogoWrapper>
        </HeaderStyled>
    )

}
export default Header