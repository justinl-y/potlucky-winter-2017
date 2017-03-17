import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import FoodPlanningScreen from './FoodPlanningScreen';

import CreatePotluckProgressBar from '../../components/CreatePotluckProgressBar';

import { NavigationActions } from 'react-navigation'
import NavigationArrow from '../../components/NavigationArrow'

import { progressBar } from '../../constants'
class FoodPlanningScreenContainer extends Component {
  static navigationOptions = {
    header: ({ navigate, dispatch, goBack }) => ({
      style: { height: 0, margin: 0, padding: 0, },
      title: <CreatePotluckProgressBar title='Food Planning' progressNumber={progressBar.SECOND_SCREEN} />,
      right: (
        <NavigationArrow
          onPress={() => navigate('PotLuckInfoScreen')}
        />
      ),
      left: (
        <NavigationArrow
          backArrow
          onPress={() => navigate('NumberOfGuestScreen')}
        />
      ),
    }),
  };

  render() {
    return (
      <FoodPlanningScreen guests={this.props.guests} dispatch={this.props.dispatch} />
    );
  }
}
const mapStateToProps = (state) => ({
  guests: state.newPotluck.guestNumber,
  potLuckFood: state.newPotluck.potLuckFood
});
export default connect(mapStateToProps)(FoodPlanningScreenContainer);
