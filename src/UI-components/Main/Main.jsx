import React, {useEffect, useState} from "react"
import {Button, Form, Typography} from "antd"
import {ContentStyled, ContentWrapper, PasswordWrapper, Title, TitleWrapper} from "./style/MainStyle"
import GeneratePasswordForm from "./GeneratePasswordForm/GeneratePasswordForm"
import generatePassword from "../../utils/generatePassword"
import { CopyOutlined } from '@ant-design/icons'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const Main = () => {

    const [generatorPassword] = Form.useForm();
    const [currentPassword, changeCurrentPassword] = useState("")
    const [copied, setCopied] = useState(false)

    useEffect(()=>{
        setCopied(false)
    }, [currentPassword])

    const onCopy = () => {
        setCopied(true)
    }

    const onIDInputChange = () =>{
        debugger
        const fieldValueLength = generatorPassword.getFieldValue("id").length
        if (!fieldValueLength)
            return changeCurrentPassword("")
        return changeCurrentPassword(generatePassword(fieldValueLength))
    }

    return (
        <ContentStyled className="site-layout">
            <ContentWrapper className="site-layout-background" style={{ padding: 24, minHeight: "calc(100vh - 170px)" }}>
                <TitleWrapper>
                    <Title level={1}>
                        Генератор паролей
                    </Title>
                </TitleWrapper>
                <GeneratePasswordForm generatorPassword={generatorPassword} onIDInputChange={onIDInputChange}/>
                <PasswordWrapper>
                    <div>Пароль: {currentPassword}</div>
                    <CopyToClipboard onCopy={onCopy} text={currentPassword}>
                        <Button type="primary" disabled={!currentPassword} ghost={!copied} icon={<CopyOutlined />}>
                            Скопировать
                        </Button>
                    </CopyToClipboard>
                </PasswordWrapper>
            </ContentWrapper>
        </ContentStyled>
    )
}

export default Main