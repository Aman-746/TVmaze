import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ShowDetail = () => {
  const params = useParams();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = "https://api.tvmaze.com";

  // const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   setIsOpen(true);
  // };

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const { data } = await axios.get(`${api}/shows/${params.id}`);
        // console.log(data);
        setDetail(data);
        setLoading(false);
      } catch (error) {
        console.log("error");
      }
    }
    fetchDetail();
  }, [params.id]);

  return (
    <div className='showdetail'>
      {
        loading ? <div>Loading</div> : (
          <div className='show'>
            <img src={detail.image.original} alt="" />
            <p>{detail.summary}</p>
            <div>
              <h1>Show Info</h1>
              <p> <b>Name:</b> {detail.name}</p>
              <p> <b>Language:</b> {detail.language}</p>
              <p> <b>Network Country:</b> {detail.network.country.name}</p>
              <p> <b>Status:</b> {detail.status} </p>
              <p> <b>Show Type:</b> {detail.type} </p>
              <p> <b>Premiered:</b> {detail.premiered}</p>
              <p> <b>Genres:</b> {detail.genres[0]} | {detail.genres[1]} </p>
              <p> <b>Rating:</b> {detail.rating.average}</p>
              <Link to={`/shows/${params.id}/form`}>
                <button>Book Show</button>
              </Link>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default ShowDetail