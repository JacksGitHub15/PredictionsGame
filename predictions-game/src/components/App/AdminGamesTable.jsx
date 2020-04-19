import React, { Component } from 'react';
// import Firebase from "../Firebase/firebase.js";

class AdminGamesTable extends Component {
    state = {
    premFixtures: [],
    checkedRow: new Map(),
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
            console.log({ premFixtures: response.data.api.fixtures });
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
                        <th></th>
                        <th>Fixture ID</th>
                        <th>Home Team</th>
                        <th></th>
                        <th>Away Team</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {   // This will go fixture by fixture and render each one
                        this.state.premFixtures.map(fixture => (
                            <tr key={fixture.fixture_id}>
                                <td><input type="checkbox"></input></td>
                                <td>{fixture.fixture_id}</td>
                                <td>{fixture.homeTeam.team_name}</td>
                                <td>vs</td>
                                <td>{fixture.awayTeam.team_name}</td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div><button> Submit selected games to DB </button></div>
        </React.Fragment>
    );
}
}

export default AdminGamesTable;