import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCreatures } from '../actions/creatureActions'
import Axios from 'axios';

class Home extends Component {

    componentDidMount() {
        this.props.fetchCreatures()
    }



    render() {
        console.log(this.props.creatures)
        return (
            <div>
                {this.props.creatures.map((creature) => {
                    return (
                        <div>
                            <h3>{creature.name}</h3>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    creatures: state.creatures.items
})

export default connect(mapStateToProps, { fetchCreatures })(Home);