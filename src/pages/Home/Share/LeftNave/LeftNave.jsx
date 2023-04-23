import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNave = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    },[])

    return (
        <div>
            <h2 className='fs-2 fw-semibold pb-3'>All Category</h2>
            <div className='ps-4 py-4'>
                {
                    categories.map(category => <p
                    key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='fs-5 fw-medium text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNave;