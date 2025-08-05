import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";


import { useGetCryptosQuery } from "../services/CryptoApi";
const { Title } = Typography;
const HomePage = () => {
  const {data,isFetching}=useGetCryptosQuery()
  const globalStas=data?.data?.stats;
  if (isFetching) return "Loading..."
  console.log(data)
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStas.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStas.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStas.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStas.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStas.totalMarkets)} />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
