import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {

  onSongDelete(id) {
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={ id } className="collection-item">
          { title }
          <i className="material-icons" onClick={() => this.onSongDelete(id)}>delete</i>
        </li>
      );
    });
  }

  render () {

    let content = null;

    if (this.props.data.loading) {

      content = (<div>Loading...</div>);

    } else {

      content = (
        <ul className="collection">
          { this.renderSongs() }
        </ul>
      );
    }

    return (
      <div>

        { content }

        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(SongList)
);
