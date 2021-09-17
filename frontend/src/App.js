import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import AlbumFormPage from "./components/AlbumFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import UserPage from "./components/UserPage";
import SongFormPage from './components/SongFormPage'
import AlbumPage from "./components/AlbumPage";
import SpecificAlbum from "./components/SpecificAlbumPage";
import UserSongs from './components/UserSongs'
import AudioBar from "./components/AudioBar";
import EditFormPage from "./components/EditFormPage/EditFormPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route path="/users/:userId/albums">
            <AlbumPage />
          </Route>
          <Route exact path="/users/:userId">
            <UserPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/albums/:albumId/edit'>
            <EditFormPage />
          </Route>
          <Route path="/albums/:albumId/songs">
            <SpecificAlbum />
          </Route>
          <Route path="/albums/new">
            <AlbumFormPage />
          </Route>
          <Route path="/songs/new">
            <SongFormPage />
          </Route>
          <Route path='/users/:userId/songs'>
            <UserSongs />
          </Route>
          <Route path='/'>Page not found</Route>
        </Switch>
      )}
      <AudioBar />
    </>
  );
}

export default App;
