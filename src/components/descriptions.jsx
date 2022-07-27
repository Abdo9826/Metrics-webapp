import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Descriptions() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchdetails();
  }, []);

  const fetchdetails = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const country = data.map((d) => {
    return (
      //   <img className='card-img-top' src={d.flags.png} alt={d.name.common} />
      <div className='card '>
        <ul className='list-group  list-group-flush'>
          <li className='text-danger list-group-item '>
            <img
              className='text-danger card-img-top'
              src={d.flags.png}
              alt={d.name.common}
            />
          </li>
          <li className='text-danger list-group-item'>Capital : {d.capital}</li>
          <li className='text-danger list-group-item'>rea : {d.area}</li>
          <li className='text-danger list-group-item'>status : {d.status}</li>
          <li className='text-danger list-group-item'>region : {d.region}</li>
          <li className='text-danger list-group-item'>
            population : {d.population}{' '}
          </li>
        </ul>
        <div class='btn bg-danger btn-danger card-footer'>
          {' '}
          <a className='white text-white' href={d.maps.googleMaps}>
            {' '}
            Location
          </a>{' '}
        </div>
      </div>
    );
  });

  return <div>{country}</div>;
}
export default Descriptions;
