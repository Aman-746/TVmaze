import axios from 'axios';
import React, { useEffect, useState } from 'react'

import ShowCard from './ShowCard';

const Home = () => {

  const [showData, setShowData] = useState([]);
  const [error, setError] = useState(false);

  const api = "https://api.tvmaze.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${api}/shows`);
        console.log(data);
        setShowData(data);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, []);

  if (error) console.log("Error while fetching data");
  const data1 = showData.slice(0, 20);

  return (
    <div className="home">
      {
        data1.map((i, index) => (
          <ShowCard key={i.id} id={i.id} name={i.name} img={i.image.medium} rating={i.rating.average} summary={i.summary} />
        ))
      }
    </div>
  )
}

export default Home