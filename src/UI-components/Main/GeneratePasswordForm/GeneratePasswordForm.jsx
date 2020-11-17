import React, {useLayoutEffect, useRef} from "react"
import { Form, Input, } from 'antd'
import {FormItemStyled} from "./style/GeneratePasswordForm"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const GeneratePasswordForm = ({generatorPassword, onIDInputChange}) => {

    return (
        <Form
            {...layout}
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            form={generatorPassword}
            initialValues={{ remember: true }}
            size="large"
        >
            <FormItemStyled
                label="ID"
                name="id"
                rules={[{ required: true, message: 'Пожалуйста, введите ваш ID!' }]}
                onChange={onIDInputChange}
            >
                <Input autofocus="true"/>
            </FormItemStyled>
        </Form>
    )

}

export default GeneratePasswordForm

