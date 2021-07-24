import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MvScreen } from '../components/marvel/MvScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import {Navbar} from '../components/ui/navBar'

export const DashboardRoutes = () => {
    return (
        <>
       <Navbar />
       <div className="container mt-2">
           <Switch>
               <Route exact path="/marvel/" component={MvScreen} />
               <Route exact path="/hero/:heroeId" component={HeroScreen} />
               <Route exact path="/dc/" component={DcScreen} />
               <Route exact path="/search/" component={SearchScreen} />

                <Redirect to="/marvel/" />
           </Switch>

       </div>
        </>
    )
}
