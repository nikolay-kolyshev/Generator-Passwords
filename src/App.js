import React from "react"

import 'antd/dist/antd.css'
import Header from "./UI-components/Header/Header"
import Main from "./UI-components/Main/Main"
import Footer from "./UI-components/Footer/Footer"
import { Layout } from 'antd'



function App() {
  return (
      <Layout>
        <Header/>
        <Main/>
        <Footer style={{ textAlign: 'center' }}>Generator Passwords ©2020 Колышев Н.И., Сахаров А.А., Статуева А.С.</Footer>
      </Layout>
  );
}

export default App;
