import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Setdata, search } from '../redux/data';

function Home() {
  const alldata = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Setdata());
  }, [dispatch]);

  const Dropdown = async (e) => {
    await dispatch(Setdata());
    dispatch(search(e.target.value));
  };

  const renderlist = alldata.map((d) => (
    <div key={d.name.common} className=" cardd bg-danger  col">
      <img className="card-img-top" src={d.flags.svg} alt={d.name.common} />

      <Link className="name" to={`/${d.name.common}`}>
        <button type="button" className="btn btn-danger">
          {d.name.common}
        </button>
      </Link>
    </div>
  ));

  return (
    <div className="container bg-danger">
      <select className="drop" onChange={Dropdown}>
        <option>Filter by Conentens</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="Asia">Asia</option>
        <option value="South America">South America</option>
      </select>
      ;
      <div className="row row-cols-2">{renderlist}</div>
    </div>
  );
}

export default Home;
