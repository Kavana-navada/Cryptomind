import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { option } = Select;
const demoImg =
  "https://static.vecteezy.com/system/resources/thumbnails/022/603/446/small_2x/cryptocurrency-3d-illustration-png.png";
const News = ({ simplified }) => {
  const { data: cryptoNews, error } = useGetCryptoNewsQuery({
    newsCategory: "cryptocurrency",
    count: simplified ? 6 : 12,
  });
  console.log("news", cryptoNews);

  if (!cryptoNews) return "Loading...";
  console.log(error);
  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.map((news, i) => (
        <Col xs={24} sm={12} md={12} xl={8}  key={i}>
          <Card hoverable className="news-card">
            <a href={news.link} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                
                <Title className="news-title" level={5}>
                  {news.title}
                </Title>
                <img
                  style={{ width: "100px", height: "80px", objectFit: "cover"}}
                  src={news.media || demoImg}
                  alt="news"
                />
                
              </div>
              <p>
                {news.summary.length > 100
                  ? `${news.summary.substring(0, 200)}...`
                  : news.summary}
              </p>
              <div className="provider-container">
                  <Text className="provider-name">
                    {news.authors?.[0]?.name || "Unknown"}
                  </Text>
                <Text >{moment(news.published).fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
