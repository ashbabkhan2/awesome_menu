import React from 'react';
import { Route,Switch } from 'react-router';
import App from './App.jsx';
import Post from './Posts.jsx';
const Apps = () =>{
  return(
   <>
   <Switch>
       <Route exact path='/' component={App}/>
        <Route exact path='/posts' component={Post}/>
   </Switch>
   {/* <App />
   <Post /> */}
   </>
  );
}
export default Apps;