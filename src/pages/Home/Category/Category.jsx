import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Category = () => {
    const {id} = useParams();
    const category = useLoaderData();
    console.log(category);
    return (
        <div>
            { id && <h2>This is Category News:{category.length}</h2>}
            {
                category.map(news => <NewsCart
                key={news._id}
                news = {news}
                ></NewsCart>)
            }
        </div>
    );
};

export default Category;