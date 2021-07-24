import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MvScreen = () => {
    return (
        <>
        <h1>Heroes de marvel</h1>
        <hr/>
        <HeroList publisher="Marvel Comics"/>
        </>
    )
}
