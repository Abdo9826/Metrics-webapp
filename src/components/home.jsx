// /*eslint-disable*/
import { Link } from 'react-router-dom';
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
      <div key={d.name.common} className=' cardd bg-danger  col'>
        <img className='card-img-top' src={d.flags.svg} alt={d.name.common} />

        <Link className='name' to={`/${d.name.common}`}>
          <button type='button' className='btn btn-danger'>
            {d.name.common}
          </button>
        </Link>
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
