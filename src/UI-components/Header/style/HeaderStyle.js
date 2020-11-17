import styled from "styled-components"
import { Layout } from "antd"

const {Header} = Layout

export const LogoWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
        height: 80%;
    }
`

export const HeaderStyled = styled(Header)`
    background-color: #D8D7EF;
    height: 100px;
`