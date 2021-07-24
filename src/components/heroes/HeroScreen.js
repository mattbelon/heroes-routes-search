import React, {useMemo} from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();
    const hero = useMemo(()=> getHeroesById(heroeId), [heroeId])

    if (!hero) {
        return <Redirect to="/" />
    }
    const handleReturn = () =>{
        if (history.length <=2){
            history.push('')
        } else {

        history.goBack()
        }
    }
    return (
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 ">

            <div className="text-center animate__animated animate__fadeInLeft">
                <img src={`../assets/images/${heroeId}.jpg`} style={{maxWidth: 200}}
                className="img-thumbnail"
                alt={hero.superhero}
                />
                </div>
                <div className="col">
                <h1>Heroe: {hero.superhero}</h1>

                    <div className="card h-100">
                            <ul className="list-group list-group-flush">
                    <li className="list-group-item">Alter ego: {hero.alter_ego}</li>
                    <li className="list-group-item">Publisher: {hero.publisher}</li>
                    <li className="list-group-item">First apareance: {hero.first_appearance}</li>
                    <p>Characters: {hero.characters}</p>
                    </ul>
                    <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                    >Return</button>
                    </div>
                </div>
            
          
        </div>
    )
}
