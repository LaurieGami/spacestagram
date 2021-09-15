import './Card.scss';

import { useState } from 'react';

function Card({media}) {
    const [like, setLike] = useState(false);

    return (
        <article className="card">
            <div className="card__header">
                <h3 className="card__title">{media.title}</h3>
                <h4 className="card__date">{media.date}</h4>
            </div>
            <div className="card__img-container">
                <img className="card__img" src={media.url} alt={media.title}/>
            </div>
            <button className="card__btn" onClick={() => setLike(!like)}>
                {!like
                    ?   <svg className="heart-main" viewBox="0 0 512 512" width="100" title="heart">
                            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                        </svg>
                    : <div>Unlike</div>
                }
            </button>
            <p className="card__description">{media.explanation}</p>
        </article>
    )
}

export default Card;