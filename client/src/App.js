import React, { useState } from 'react';
import {Route} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      {/* <SavedList list={savedList} history={}/> */}
      <Route path="/" render={(props)=>{return <SavedList list={savedList} {...props} />}}/>
      <Route exact path="/" component={MovieList}/>
      <Route path="/movies/:movieID" component={Movie}/>
    </div>
  );
};

export default App;
