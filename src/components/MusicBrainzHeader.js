import React from 'react';
import MusicBrainz from './MusicBrainz'
import { connect } from 'react-redux';
import { fetchArtists } from '../actions'

class MusicBrainzHeader extends React.Component {


    state = { eventTerm: '', term: '' };


    handleClick = () => {

        this.props.fetchArtists(this.state.eventTerm);
        this.setState({ term: this.state.eventTerm });
    };

    render() {


        return (

            <div className='ui form'>
                <div className='field'>
                    <h1>Search MusicBrainz {this.state.term}</h1>
                    <div className="ui icon input">
                        <input className='input' placeholder="Search..." onChange={(e) => this.setState({ eventTerm: e.target.value })} value={this.state.eventTerm} />
                        <i className="search icon label" onClick={this.handleClick} />
                    </div>

                </div>

                <MusicBrainz />

            </div>

        );
    }
};


const mapStateToProps = (state) => { //function is passed to connect, which then returns objects in state

    return { artists: state.artists };
}

export default connect(mapStateToProps, { fetchArtists })(MusicBrainzHeader);
//connect the provider and the store


