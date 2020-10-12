//import React from 'react';
import React from 'react';
import Route from './Route'
import Header from './Header'
import MusicBrainzHeader from './MusicBrainzHeader'
import Lastfm from './Lastfm'
import Favorites from './Favorites'

const App = () => {

    return (
        <div>
            <Header />
            <div style={{ padding: '50px 100px 20px 100px' }}>
                <Route path="/">
                    <MusicBrainzHeader />
                </Route>
                <Route path="/Lastfm">
                    <Lastfm />
                </Route>
                <Route path="/Favorites">
                    <Favorites />
                </Route>
            </div>
        </div>
    );


};

export default App;
