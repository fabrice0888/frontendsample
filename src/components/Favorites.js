import React from 'react';
import { connect } from 'react-redux';
import { removeFavoriteArtistFm, removeFavoriteRelease } from '../actions'

const Favorites = (props) => {

    const RemoveFavorite = (artist) => {

        props.removeFavoriteArtistFm(artist);
    }

    const RemoveFavoriteRelease = (release) => {

        props.removeFavoriteRelease(release);
    }


    const renderList = () => {

        return (


            props.fmFavorites.map(artist => {
                return (
                    <div className="item" key={artist} >
                        <div className="left floated content">
                            <div className="ui icon" onClick={() => RemoveFavorite(artist)} >
                                <i className="icon minus circle red" />
                            </div>
                        </div>
                        <div className="content">{artist}</div>
                    </div >

                );
            })

        );

    }

    const renderReleaseList = () => {

        return (


            props.releaseFavorites.map(release => {
                return (
                    <div className="item" key={release} >
                        <div className="left floated content">
                            <div className="ui icon" onClick={() => RemoveFavoriteRelease(release)} >
                                <i className="icon minus circle red" />
                            </div>
                        </div>
                        <div className="content">{release}</div>
                    </div >

                );
            })

        );

    }


    return (
        <div >

            <div>
                <div className="header">
                    <h3>  Favorite Artists</h3>
                </div>
                <div className="ui divided list">{renderList()} </div>
            </div >
            <hr />
            <div>
                <div className="header">
                    <h3>  Favorite Release</h3>
                </div>
                <div className="ui divided list">{renderReleaseList()} </div>
            </div >
        </div>
    );
};


const mapStateToProps = state => {
    return {
        fmFavorites: state.fmFavorites, releaseFavorites: state.releaseFavorites
    };
};

export default connect(mapStateToProps, { removeFavoriteArtistFm, removeFavoriteRelease })(Favorites);

