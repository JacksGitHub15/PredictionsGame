import React, { Component } from 'react';
//eslint-disable-next-line
import axios from 'axios';

class PredictGames extends Component {
    state = {
        premFixtures: [],
        team1: '',
        team2: '',
        team1Crest: '',
        team2Crest: ''
    };

    styles = {
        fontSize: 25,
        fontWeight: 'bold'
    };


    componentDidMount() {
        const axios = require("axios");

        axios({
            "method": "GET",
            "url": "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/next/10",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "eb0c414820mshff1e365370bd955p12b01cjsn801326d6a8cb"
            }
        })
            .then((response) => {
                console.log(response);
                this.setState({ premFixtures: response.data.api.fixtures});
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    Predictions Game
                </header>
                    {this.state.premFixtures.map(hTeam => <li key={hTeam.id}>{hTeam.homeTeam.team_name}</li>)}
                    {this.state.premFixtures.map(aTeam => <li key={aTeam.id}>{aTeam.awayTeam.team_name}</li>)}
            </React.Fragment>
        );
    }
}

export default PredictGames;