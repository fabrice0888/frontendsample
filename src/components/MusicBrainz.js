import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArtists, fetchReleases } from '../actions'
import Release from './Release'
import StyledLink from './Styles/StyledLink'

class MusicBrainz extends Component {

    state = { showResults: false, artistIdSelected: '' };

    renderListRelease(artistId) {

        this.setState({ showResults: !this.state.showResults, artistIdSelected: artistId });
        this.props.fetchReleases(artistId)

    }


    renderList() {

        return this.props.artists.map(artist => {
            return (
                <div className="item" key={artist.id} >
                    <div className="right floated content">
                        <StyledLink as='a' onClick={() => this.renderListRelease(artist.id)}> {this.state.showResults & this.state.artistIdSelected === artist.id ? 'Hide Releases' : 'Show Releases'}</StyledLink>
                    </div>
                    <div className="content">{artist.name}</div>
                    <Release releases={this.props.releases} selectedArtistId={this.state.artistIdSelected} currentArtistId={artist.id} showResults={this.state.showResults} />
                </div >

            );
        });
    }

    render() {

        return (
            <div>
                <div className="header">
                    <h2> Search Results</h2>
                    <div className="ui clearing divider"></div>
                </div>
                <div className="ui divided list">{this.renderList()} </div>
            </div >

        );

    }
}

const mapStateToProps = (state) => { //function is passed to connect, which then returns objects in state

    return { artists: state.artists, releases: state.releases };
}

export default connect(mapStateToProps, { fetchArtists, fetchReleases })(MusicBrainz); //() returns second function inside the function
//connect the provider and the store


