import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appareance,
    characters,
}) => {
    return (
        <div className="col" style={{maxWidth: 540}}>
            <div className="card h-100 ">
                <div className="col-md-4">
                    <img src={`../assets/images/${id}.jpg`} className="card-img" alt={superhero} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">
                                {alter_ego}
                                </p>

                                <p className="card-text">
                                    <small className="text-muted">
                                    {first_appareance}
                                    </small>
                                </p>

                                {
                                    ( alter_ego !== characters)
                                    && <p className="card-text">
                                        {characters}
                                    </p>
                                }
                                <Link 
                                to={`../hero/${id}`}
                                >
                                    Know more
                                    </Link>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}
