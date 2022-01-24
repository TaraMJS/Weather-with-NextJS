import Layout from "../components/Layout";
import Heading from "../components/typography/Heading";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Results(props) {
  console.log(props);

  return (
    <Layout>
      <div className="results-container">
        <Heading size="2" content="Results" style="soft-blue" />
        <Heading
          size="3"
          content="Wheater in Barcelona, Spain"
          style="md-heading"
        />
        <div>
          <Heading size="4" content="Today:" style="sm-heading" />
          <ul className="ul-style shadow">
            <li>Temperature: {props.weather.temperature}</li>
            <li>Description: {props.weather.description}</li>
            <li>Wind: {props.weather.wind}</li>
          </ul>
        </div>

        <Heading size="4" content="Forecast for the next 3 days:" style="sm-heading" />
        <div className="forecast-container">
          {props.forecast.map((weather) => {
            return (
              <ul key={weather.day} className="ul-style shadow">
                <li>Day: {weather.day}</li>
                <li>Temperature: {weather.temperature}</li>
                <li>Wind: {weather.wind}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let weather = [];
  try {
    const response = await axios.get(BASE_URL);
    weather = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      weather: weather,
      forecast: weather.forecast,
    },
  };
}