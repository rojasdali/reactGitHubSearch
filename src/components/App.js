import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const styles = {
  makePrettyColor: {
    color:    'blue',
    fontSize: 40
  },
  withGradient: {
    height: 360,
    background: 'linear-gradient(to bottom, #5a4ba3 0%, #7b3795 100%)'
  },
  contentWrapper: {
    display:        'flex',
    justifyContent: 'center',
    marginLeft:     50,
    marginRight:    50
  }
};

class App extends Component {
  state = {
    language: '',
    stars:    '',
    searchInProgress: false
  };

  handleSearchSubmit = (language = '', stars = '') => {
    this.setState(
      {
        language,
        stars,
        searchInProgress: true
      }
    );
  };

  resetSearch = () => this.setState ({searchInProgress: false});

  render() {
    const {language, stars, searchInProgress} = this.state;
    const { classes } = this.props;

    return(
      <main>
        <CssBaseline/>

        <section className= { classes.withGradient } >
          <section className= { classes.contentWrapper } >
        <SearchForm handleSearchSubmit={this.handleSearchSubmit} />
          </section>
        </section>

        <section>
          <SearchResults
            language={language}
            stars={stars}
            searchInProgress={searchInProgress}
            resetSearch = {this.resetSearch}
          />
        </section>
      </main>
    );
  }
}

export default withStyles(styles)(App);