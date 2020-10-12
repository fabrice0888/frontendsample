import React, { Component } from 'react';
import { addFavoriteRelease } from '../actions'
import { connect } from 'react-redux';



class Release extends Component {

    AddFavorite = (release) => {

        this.props.addFavoriteRelease(release)

    };

    renderList() {


        return this.props.releases.map(release => {
            return (

                <tr key={release.id} >
                    <td>
                        <div className="ui icon" onClick={() => this.AddFavorite(release.title)} >
                            <i className="middle aligned icon star blue" />
                        </div>
                    </td>
                    <td>
                        {release?.releases?.map(inner => inner.date)}
                    </td>
                    <td> {release?.title}</td>
                    <td>
                        {release?.releases?.map(inner => inner.title)}
                    </td>
                    <td>
                        {release?.releases?.map(inner => inner['track-count'])}
                    </td>
                </tr>

            );
        });
    }

    render() {


        if (this.props.selectedArtistId === this.props.currentArtistId && this.props.showResults) {

            return <div>
                <table className='ui celled table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Release</th>
                            <th>No of Tracks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>

                </table>
            </div>;

        }
        else {
            return null;
        }
    }
}



const mapStateToProps = state => {
    return { releaseFavorites: state.releaseFavorites };
};


export default connect(mapStateToProps, { addFavoriteRelease })(Release);  