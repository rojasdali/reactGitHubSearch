import React, { Component } from 'react';
import ResultsGrid from './ResultsGrid';
import axios from 'axios';
import {buildSearchURI} from '../../utils'
class SearchResults extends Component {
    state =  {
        repos: []
    }

    componentDidUpdate = async (prevProps, prevState) => {
        const {language, stars, searchInProgress } = this.props;
        // A search in progress
        if (prevState.repos !== this.state.repos) {
            this.props.resetSearch();
            return;
        }

        if (searchInProgress) {
            
            // We want to get a valid repsonse from the Api
            const encodedURI = buildSearchURI({language, stars});
            const githubResponse = await axios.get(encodedURI);
            const repos = githubResponse.data.items.slice(0,15);
            console.log(repos);
            this.setState({ repos });
        }
        
    }

    render() {
        
        return (
            <div>
                <ResultsGrid repos = {this.state.repos}/>
            </div>
        );
    }
}

export default SearchResults;