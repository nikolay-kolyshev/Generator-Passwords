import styled from "styled-components"
import {Button, Layout, Typography} from "antd"

const {Content} = Layout

export const ContentStyled = styled(Content)`
    background-color: #13122A;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 200px;
    margin-top: 100px;
    
    @media screen and (max-width: 1000px) {
        padding: 0 100px;
    }
    
    @media screen and (max-width: 600px) {
        padding: 0 50px;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PasswordWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TitleWrapper = styled.div`
    color: white;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
`

export const Title = styled(Typography.Title)`
    color: white !important;
`

export const ButtonStyled = styled(Button)`
    background-color: #13922C !important;
    border-color: #13922C !important;
    &.ant-btn-background-ghost{
        background-color: transparent !important;
        border-color: #40A9FF !important;
    }
    &[disabled] {
        border-color: #6B6B73 !important;
        color: #6B6B73 !important;
    }
`