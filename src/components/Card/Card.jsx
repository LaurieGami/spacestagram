import './Card.scss';

import { useState } from 'react';

function Card({media}) {
    const [like, setLike] = useState(false);

    const liked = like ? "on" : "";

    return (
        <article className="card">
            <div className="card__header">
                <h3 className="card__title">{media.title}</h3>
                <h4 className="card__date">{media.date}</h4>
            </div>
            {media.media_type === "image" &&
                <div className="card__img-container">
                    <img className="card__img" src={media.url} alt={media.title}/>
                </div>
            }
            {media.media_type === "video" &&
                <div className="card__video-container">
                    <iframe className="card__video" width="560" height="315" src={media.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            }
            <div className="card__footer">
                <div className="card__btn-container">
                    <button className="card__btn" onClick={() => setLike(!like)}>
                        <svg className="heart" viewBox="0 0 100 100" height="24px" width="24px">
                            <g className="heart__path-container">
                                <path className={`heart__full ${liked}`} d="M 90,40 a 20 20 0 1 0 -40,-25 a 20 20 0 1 0 -40,25 l 40,50  z" />
                                <path className={`heart__outline ${liked}`}  d="M 90,40 a 20 20 0 1 0 -40,-25 a 20 20 0 1 0 -40,25 l 40,50  z" />
                            </g>
                        </svg>
                    </button>
                </div>
                <p className="card__description">{media.explanation}</p>
            </div>
        </article>
    )
}

export default Card;