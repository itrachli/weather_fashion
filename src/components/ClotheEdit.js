import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Communications from 'react-native-communications';
import ClotheForm from './ClotheForm';
import { clotheUpdate, clotheSave, clotheDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class ClotheEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.clothe, (value, prop) => {
      this.props.clotheUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, type, season } = this.props;

    this.props.clotheSave({ name, type, season, uid: this.props.clothe.uid });
  }

  onTextPress() {
    const { type, season } = this.props;

  }

  onAccept() {
    const { uid } = this.props.clothe;

    this.props.clotheDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <ClotheForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Remove Clothe
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, type, season } = state.clotheForm;

  return { name, type, season };
};

export default connect(mapStateToProps, {
  clotheUpdate, clotheSave, clotheDelete
})(ClotheEdit);
