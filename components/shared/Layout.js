import { Layout, Typography } from 'antd'
import '../css/base.less'
import Brand from './Brand'
import MenuBar from './MenuBar'

const { Header, Footer, Content } = Layout
const Base = ({ children }) => {
    return (
        <Layout>
            <Header className="header">
                <div style={{float:'left', padding: '1em'}}>
                   <Brand/>
                </div>
                <div>
                    <MenuBar />
                </div>

            </Header>
            <Content>
                {children}
            </Content>
            <Footer className='footer'>
                <div>copyright 2020</div>
                <div>CONTACT US</div>
            </Footer>
        </Layout>
    )
}

export default Base