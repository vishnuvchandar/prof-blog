import { Typography, Divider } from 'antd';

import './css/home.less'

const { Title, Paragraph, Text } = Typography;
const Home = () => {
    return (
    <div className="home">
        <Typography>
            <Title>
                WELCOME TO NEW HELATHCARE DASHBOARD
            </Title>
            <Title level={4}>
                A dynamic tool that provides insights and analytical dashboards for your organization
            </Title>
        </Typography>
    </div>
    )
}

export default Home