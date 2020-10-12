import React, { useState, useEffect } from 'react';
import LastfmDetails from './LastfmDetails'
import { connect } from 'react-redux';
import { fetchArtistsFm } from '../actions'

const Lastfm = (props) => {

    const [eventTerm, setEventTerm] = useState('');
    const [term, setTerm] = useState('');

    const handleClick = () => {
        setTerm(eventTerm);
    };

    useEffect(() => {

        props.fetchArtistsFm(term);

    }, [term]);


    return (

        <div className='ui form'>
            <div className='field'>
                <h1>Search Last.Fm </h1>

                <div className="ui icon input">
                    <input type="text" placeholder="Search..." onChange={(e) => setEventTerm(e.target.value)} value={eventTerm} />
                    <i className="search icon label" onClick={handleClick}></i>
                </div>

                <LastfmDetails artists={props.artists} term={term} />
            </div>

        </div>
    );

}

const mapStateToProps = state => {
    return { artists: state.artistsFm };
};


export default connect(mapStateToProps, { fetchArtistsFm })(Lastfm); 
