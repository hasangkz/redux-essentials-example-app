import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Navbar } from './app/Navbar';

import { PostsList } from './features/posts/PostsList.jsx';
import { AddPost } from './features/posts/AddPost.jsx';
import { PostDetail } from './features/posts/PostDetail.jsx';
import { EditPost } from './features/posts/EditPost.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <>
                <PostsList />
                <AddPost />
              </>
            )}
          />
          <Route exact path='/posts/:postID' component={PostDetail} />
          <Route exact path='/editPost/:postID' component={EditPost} />

          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
