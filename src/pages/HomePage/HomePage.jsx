import './HomePage.scss';

import { useState, useEffect } from 'react';

import axios from 'axios';

import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';

const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = process.env.REACT_APP_APOD_API_KEY;

function HomePage() {
    const [loading, setLoading] = useState(true);
    const [media, setMedia] = useState('');
    const [error, setError] = useState('');

    const getMedia = () => {
        axios.get(`${API_URL}?api_key=${API_KEY}`)
        .then(res => {
            setMedia(res.data);
            setLoading(false);
        })
        .catch(err => {
            setError('An error happened while trying to load the files');
            setLoading(false);
        })
    };

    useEffect(() => {
        getMedia();
    }, [loading]);

    return (
        <main className="homepage">
            {!!error && <div>{error}</div>}
            <section>
                {loading && 
                    <Loader />
                }
                {!loading && media && 
                    <Card media={media} />
                }
            </section>
        </main>
    )
}

export default HomePage;