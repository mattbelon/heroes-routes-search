import React, {useMemo} from 'react'
import queryString from 'query-string'

import { useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { getHeroesByName } from '../../selectors/getHeroesByName'

export const SearchScreen = ({history}) => {
    const location = useLocation()
    const {q = ''}  = useMemo(() => queryString.parse(location.search), [location.search])


    
    
    const [formValues, handleInputChange, reset] = useForm({
        searchTerm : q
    }
    )
    const {searchTerm} = formValues

    const heroesFiltered = useMemo(()=>getHeroesByName( searchTerm ),[q])

    const handleSearch = (e) =>{
        e.preventDefault()
        console.log(searchTerm)
        history.push(`?q=${ searchTerm }`)

    }

    return (
        <div>
            <hr />
            <div className="row">
                <div className="col">
                    <h4>Search form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                        name="searchTerm"
                        type="text"
                        placeholder="Find your hero"
                        className="form-control"
                        autoComplete="off"
                        value={searchTerm}
                        onChange={handleInputChange}
                        />

                        <button
                        type="submit"
                        className="btn btn-primary auto-mx"
                        
                        >Search ...</button>
                    </form>
                </div>
                <div className="col">
                    <h4>Results</h4>
                    <hr />

                    {
                    (q ==='') && <div className="alert alert-info">
                        Search a hero
                    </div>}
                    {
                    (q !=='' && heroesFiltered.length === 0)
                    && <div className="alert alert-danger">
                        We dont have heroes with your criteria
                    </div>}
                    {
                        heroesFiltered.map ( hero =>(
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
