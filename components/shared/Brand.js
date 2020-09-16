import { Typography } from 'antd';
const { Title} = Typography;

const Brand = () => {
    return (
        <Typography>
           <Title style={{color: 'red', borderBottom: '2px solid'}} level={3}>
           OASIS
           </Title> 
        </Typography>
    )
}

export default Brand