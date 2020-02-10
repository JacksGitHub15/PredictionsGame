import React, { Component } from 'react';

class GamesTable extends Component {
    state = {
        premFixtures: [],
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
                this.setState({ premFixtures: response.data.api.fixtures });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <React.Fragment>
                <table class="container text-center table table-sm">
                    <thead class="table-success">
                        <tr>
                            <th>Home Team</th>
                            <th></th>
                            <th>Away Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.premFixtures.map(row => (
                                <tr>
                                    <td>{row.homeTeam.team_name}</td>
                                    <td>vs</td>
                                    <td>{row.awayTeam.team_name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default GamesTable;