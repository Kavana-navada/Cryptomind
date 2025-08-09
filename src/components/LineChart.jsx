import React from "react";
import {  Col, Row, Typography } from "antd";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);
const { Title } = Typography;
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice=[]
    const coinTimeStamp=[]
    const historyDetails=coinHistory?.data?.history
    for (let i=0;i<historyDetails.length;i+=1){
        coinPrice.push(historyDetails[i].price);
        coinTimeStamp.push(new Date((historyDetails[i].timestamp)*1000).toLocaleDateString())
    }
    const data={
        labels:coinTimeStamp,
        datasets:[
            {
                label:"Price in USD",
                data:coinPrice,
                fill:false,
                backgroundColor:"#0071bd",
                borderColor:"#0071bd",

            }
        ]
    }
    const options={
        scales: {
  y: {
    beginAtZero: false
  }
}

       
    }

  return (
    <div>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} price: ${currentPrice}
          </Title>
        </Col>
      </Row>

      <Line data={data} options={options}/>
    </div>
  );
};

export default LineChart;
