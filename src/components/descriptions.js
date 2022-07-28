import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Descriptions() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const fetchdetails = () => {
    axios.get(`https://restcountries.com/v3.1/name/${id}`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchdetails();
  }, []);

  const country = data.map((d) => (
    <div key={d.name.common} className="card ">
      <ul className="list-group  list-group-flush">
        <li className="text-danger list-group-item ">
          <img
            className="text-danger card-img-top"
            src={d.flags.png}
            alt={d.name.common}
          />
        </li>
        <li className="text-danger list-group-item">
          Capital :
          {d.capital}
        </li>
        <li className="text-danger list-group-item">
          area :
          {d.area}
        </li>
        <li className="text-danger list-group-item">
          status :
          {d.status}
        </li>
        <li className="text-danger list-group-item">
          region :
          {d.region}
        </li>
        <li className="text-danger list-group-item">
          population :
          {' '}
          {d.population}
          {' '}
        </li>
      </ul>
      <div className="btn bg-danger btn-danger card-footer">
        {' '}
        <a className="white text-white" href={d.maps.googleMaps}>
          {' '}
          Location
        </a>
        {' '}
      </div>
    </div>
  ));

  return <div>{country}</div>;
}
export default Descriptions;
