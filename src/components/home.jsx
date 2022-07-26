/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Setdata } from '../redux/data';
import { useSelector } from 'react-redux';

function Home() {
  const alldata = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Setdata());
  }, []);

  const renderlist = alldata.map((d) => {
    return (
      <div key={d.name.common} className='card bg-danger col'>
        <img className='card-img-top' src={d.flags.svg} alt={d.name.common} />
        <div className='card-body bg-danger'>
          <h5 className='card-title'>{d.name.common}</h5>
          <p className='card-text'>Capital : {d.capital}</p>
          <p className='card-text'>population : {d.population}</p>
          <p className='card-text'>timezones : {d.timezones}</p>
          <a href={d.maps.googleMaps} className='btn btn-primary'>
            check
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className='container bg-danger'>
      <div className='row row-cols-2'>{renderlist}</div>
    </div>
  );
}

export default Home;
