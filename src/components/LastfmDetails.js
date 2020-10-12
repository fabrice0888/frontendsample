import React, { useState } from 'react';
import { addFavoriteArtistFm } from '../actions'
import { connect } from 'react-redux';


const LastfmDetails = (props) => {

    const mystyle = {
        color: "Black",
        backgroundColor: "White",
        padding: "10px",
        fontSize: "16px",
        fontFamily: "Arial"
    };

    const [shortList, setShortList] = useState([]);

    const AddFavorite = (artist) => {

        props.addFavoriteArtistFm(artist)
    };

    const AddShortList = (artist) => {

        var songExists = shortList.filter(rel => rel === artist);

        if (songExists <= 0) {

            setShortList([...shortList, artist]);
        }

    };

    const renderList = () => {

        return (

            props.artists.map(artist => {
                return (
                    <div className="item" key={artist.name} >
                        <div className="right floated content">
                            <div className="ui icon">
                                <i className="icon plus green" onClick={() => AddShortList(artist.name)}></i>
                            </div>
                        </div>
                        <div className="content">{artist.name}</div>
                    </div >

                );
            })

        );

    }

    const renderShortList = () => {

        return (

            shortList.map(artist => {
                return (
                    <div className="item" key={artist} >
                        <div className="left floated content">
                            <div className="ui icon" >
                                <i className="middle aligned icon star blue" onClick={() => AddFavorite(artist)} />
                            </div>

                        </div>
                        <div className="content">{artist}</div>
                    </div >

                );
            })

        );

    }

    return (
        <div>
            <br />
            <div className="header">
                <h2> Search Results</h2>
                <div className="ui clearing divider"></div>
            </div>
            <div className="ui divided list">
                {renderList()}
            </div>

            <div className="header">
                <label style={mystyle}> My Short List</label>
            </div>
            <div className="ui divided list">
                {renderShortList()}
            </div>

        </div >

    );
};

const mapStateToProps = state => {
    return { fmFavorites: state.fmFavorites };
};

export default connect(mapStateToProps, { addFavoriteArtistFm })(LastfmDetails);  