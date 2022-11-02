import React, { useState, useEffect } from 'react';
import './App.css';

function Item() {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItems] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await fetchItem.json();
        console.log(item);
        setItems(item);
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.transparent} alt="" />
        </div>
    );
}

export default Item;