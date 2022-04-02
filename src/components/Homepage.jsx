import React from 'react';
import millify from 'millify';
import { Typography,Row,Col,Statistic} from 'antd';
import { useGetCryptosQuery
} from '../services/cryptoApi';
import { Link } from 'react-router-dom';
import Cryptocurrencies  from './Cryptocurrencies';
import News from './News';

const {Title} = Typography;

const Homepage = () => {
  
   const { data,isFetching} = useGetCryptosQuery(10);

   const globalStats = data?.data?.stats;

   console.log(data);

   if(isFetching) {
      return 'Loading...';
   }

  return (
    <>
      <Title lavel={2} className="heading">Global Crypto Stats </Title>
      <Row>

       <Col span={12}>
           <Statistic title="Total Cryptocurrencies" value={globalStats.total}  />
        </Col>   

        <Col span={12}>
           <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>  

        <Col span={12}>
           <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>   

        <Col span={12}>
           <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>   

        <Col span={12}>
           <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>  

       </Row>

       <div className="name-heading-container">

        <Title lavel={2} className="home-title" style={{textAlign:'left'}}> Top 10 Cryptocurrencies in the world.</Title>

        <Title lavel={3} className="show-more" style={{textAlign:'right'}}><Link to="/cryptocurrency">Show More</Link></Title>

      </div>

      <Cryptocurrencies simplified = { true } />

      <div className="name-heading-container">
      <Title lavel={2} className="home-title">Latest Crypto News.</Title>

      <Title lavel={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>

      <News simplified ={true} />

    </>
  )
}

export default Homepage;