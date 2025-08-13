import React from "react";
import millify from "millify";
import Loader from "./Loader";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import {News,Cryptocurrencies} from "../components"
import { useGetCryptosQuery } from "../services/CryptoApi";
const { Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStas = data?.data?.stats;
  if (isFetching) return <Loader/>;
  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12} className="statistic">
          <Statistic title="Total Cryptocurrencies" value={globalStas?.total} />
        </Col>
        <Col span={12}  className="statistic">
          <Statistic
            title="Total Exchanges"
            value={millify(globalStas?.totalExchanges)}
          />
        </Col>
        <Col span={12}  className="statistic">
          <Statistic
            title="Total Market Cap"
            value={millify(globalStas?.totalMarketCap)}
            
          />
        </Col>
        <Col span={12}  className="statistic">
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStas?.total24hVolume)}
          />
        </Col>
        <Col span={12}  className="statistic">
          <Statistic
            title="Total Markets"
            value={millify(globalStas?.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={5} className="show-more">
          <Link to="/cryptocurrencies">Show more </Link>
        </Title>
      </div>
      <Cryptocurrencies simplified/>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={5} className="show-more">
          <Link to="/news">Show more </Link>
        </Title>
      </div>
      <News simplified/>
    </>
  );
};

export default HomePage;
