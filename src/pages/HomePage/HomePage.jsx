import './HomePage.scss';

import { useState, useEffect } from 'react';

import axios from 'axios';

const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = process.env.REACT_APP_APOD_API_KEY;

function HomePage() {
    const [loading, setLoading] = useState(true);
    const [media, setMedia] = useState('');

    const getMedia = () => {
        axios.get(`${API_URL}?api_key=${API_KEY}`)
        .then(res => {
            console.log(res);
            setMedia(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setMedia('Error');
        })
    };

    useEffect(() => {
        getMedia();
    }, [loading]);

    return (
        <main>
            <h1>Home Page</h1>
            <article className="homepage">
                
            </article>
        </main>
    )
}

export default HomePage;