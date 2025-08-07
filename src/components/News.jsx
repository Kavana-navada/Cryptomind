import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/CryptoApi";


const { Text, Title } = Typography;
const { option } = Select;
const demoImg =
  "https://static.vecteezy.com/system/resources/thumbnails/022/603/446/small_2x/cryptocurrency-3d-illustration-png.png";
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  
  const { data: cryptoNews, error } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  console.log("news", cryptoNews);

  if (!cryptoNews) return "Loading...";
  if (cryptoNews.length === 0) {
  return <div>No news available for this category.</div>;
}

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin)=>(
              <Option value={coin.name} key={coin.uuid} >{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.map((news, i) => (
        <Col xs={24} sm={12} md={12} xl={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.link} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={5}>
                  {news.title}
                </Title>
                <img
                  style={{ width: "100px", height: "80px", objectFit: "cover" }}
                  src={news.media || demoImg}
                  alt="news"
                />
              </div>
              <p>
                {news.summary?.length > 100
                  ? `${news.summary.substring(0, 200)}...`
                  : news.summary}
              </p>
              <div className="provider-container">
                <Text className="provider-name">
                  {news.authors?.[0]?.name || "Unknown"}
                </Text>
                <Text>{moment(news.published).fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
