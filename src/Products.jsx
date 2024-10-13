import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './Redux/productsSlice';
import "../src/App.css";
const DataComponent = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.product);

    // Fetch data when the component mounts
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="slide">
                {
                    items.map((item) => {
                        return <div className=''>
                            <img src={item.thumbnail} alt="x" />
                            <p>{item.title}</p>
                        </div>
                    })
                }
            </div>
            <div className='grid'>
                {
                    items.map((item) => {
                        return <div className='card'>
                            <img src={item.thumbnail} alt="x" />
                            <p>{item.title}</p>
                        </div>
                    })
                }
            </div></>
    );
};

export default DataComponent;
