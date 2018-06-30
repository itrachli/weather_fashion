import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clotheUpdate, clotheCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import ClotheForm from './ClotheForm';

class ClotheCreate extends Component {
  onButtonPress() {
    const { name, type, season } = this.props;

    this.props.clotheCreate({ name, type, season: season || 'Spring' });
  }

  render() {
    return (
      <Card>
        <ClotheForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, type, season } = state.clotheForm;

  return { name, type, season };
};

export default connect(mapStateToProps, {
  clotheUpdate, clotheCreate
})(ClotheCreate);
