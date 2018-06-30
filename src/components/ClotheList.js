import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { clotheFetch } from '../actions';
import ListItem from './ListItem';

class ClotheList extends Component {
  componentWillMount() {
    this.props.clotheFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ clothes }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(clothes);
  }

  renderRow(clothe) {
    return <ListItem clothe={clothe} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const clothes = _.map(state.clothes, (val, uid) => {
    return { ...val, uid };
  });

  return { clothes };
};

export default connect(mapStateToProps, { clotheFetch })(ClotheList);
