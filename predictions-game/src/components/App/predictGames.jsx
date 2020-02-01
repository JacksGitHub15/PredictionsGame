import React, { Component } from 'react';

class PredictGames extends Component {
    state = {
        team1: 'Southampton',
        team2: 'Burnley',
        team1Crest: '',
        team2Crest: ''
    };

    styles = {
        fontSize: 25,
        fontWeight: 'bold'
    };

    render() {
        return (
            <React.Fragment>
                <header>
                    Predictions Game
                </header>

                <div className="form-row">
                    {/*<img src="" alt="team1Crest"/>*/}
                    <span style={this.styles} className="badge badge-primary m-2"> {this.state.team1} </span>
                    <form>
                        <input type="text" />
                    </form>

                    <h1>vs</h1>

                    <form>
                        <input type="text" />
                    </form>
                    <span style={this.styles} className="badge badge-secondary m-2"> {this.state.team2}</span>
                    {/*<img src="" alt="team2Crest"/>*/}
                </div>
            </React.Fragment>
        );
    }
}

export default PredictGames;