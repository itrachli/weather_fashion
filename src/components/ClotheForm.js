import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { clotheUpdate } from '../actions';
import { CardSection, Input } from './common';

class ClotheForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.clotheUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Type"
            placeholder="Top"
            value={this.props.type}
            onChangeText={value => this.props.clotheUpdate({ prop: 'type', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Season</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.season}
            onValueChange={value => this.props.clotheUpdate({ prop: 'season', value })}
          >
            <Picker.Item label="Summer" value="Summer" />
            <Picker.Item label="Spring" value="Spring" />
            <Picker.Item label="Winter" value="Winter" />
            <Picker.Item label="Autumn" value="Autumn" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, type, season } = state.clotheForm;

  return { name, type, season };
};

export default connect(mapStateToProps, { clotheUpdate })(ClotheForm);
