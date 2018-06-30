import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ClotheList from './components/ClotheList';
import ClotheCreate from './components/ClotheCreate';
import ClotheEdit from './components/ClotheEdit';

const RouterComponent = () => {
  return (
  //  <Router sceneStyle={{  justifyContent: center }}>
    <Router>
      <Scene key="root" hideNavBar>
    <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.clotheCreate()}
          rightTitle="Add"
          key="clotheList"
          component={ClotheList}
          title="Clothes"
          initial
        />
        <Scene key="clotheCreate" component={ClotheCreate} title="Create Clothe" />
        <Scene key="clotheEdit" component={ClotheEdit} title="Edit Clothe" />
      </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
