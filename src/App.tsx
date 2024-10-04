import React from 'react';
import Navigation from './shared/nav';
import UserList from './components/UserList';

function App() {
  return (
    <div id="app">
      <Navigation></Navigation>
      <UserList></UserList>
    </div>
  );
}

export default App;
