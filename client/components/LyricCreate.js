import React, { Component } from 'react';
import mutation from '../mutations/addLyric';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' }
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        songId: this.props.songId,
        content: this.state.content
      }
    }).then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add a Lyric:</label>
          <input
            type="text"
            onChange={ event => this.setState({ content: event.target.value }) }
            value={ this.state.content }
          />
        </form>
      </div>
    )
  }
}

export default graphql(mutation)(LyricCreate);
