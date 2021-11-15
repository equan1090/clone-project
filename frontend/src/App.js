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
import AudioPlayer from "./components/AudioPlayer";
import EditFormPage from "./components/EditFormPage/EditFormPage";
import SongPage from "./components/SongPage"
import HomePage from "./components/HomePage";
import SplashPage from "./components/SplashPage";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>


      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <SplashPage/>
          </Route>
          <Route exact path='/home'>
            <Navigation isLoaded={isLoaded} />
            <HomePage />
            <AudioPlayer />
            </Route>
          <Route path="/users/:userId/albums">
            <Navigation isLoaded={isLoaded} />
            <AlbumPage />
            <AudioPlayer />
          </Route>
          <Route exact path="/users/:userId">
            <Navigation isLoaded={isLoaded} />
            <UserPage />
            <AudioPlayer />
          </Route>
          <Route path="/login">
            <Navigation isLoaded={isLoaded} />
            <LoginFormPage />
            <AudioPlayer />
          </Route>
          <Route path="/signup">
            <Navigation isLoaded={isLoaded} />
            <SignupFormPage />
            <AudioPlayer />
          </Route>
          <Route path='/albums/:albumId/edit'>
           <Navigation isLoaded={isLoaded} />
            <EditFormPage />
            <AudioPlayer />
          </Route>
          <Route path="/albums/:albumId/songs">
            <Navigation isLoaded={isLoaded} />
            <SpecificAlbum />
            <AudioPlayer />
          </Route>
          <Route path="/albums/new">
            <Navigation isLoaded={isLoaded} />
            <AlbumFormPage />
            <AudioPlayer />
          </Route>
          <Route path="/songs/new">
            <Navigation isLoaded={isLoaded} />
            <SongFormPage />
            <AudioPlayer />
          </Route>
          <Route exact path="/songs/:songId">
            <Navigation isLoaded={isLoaded} />
            <SongPage />
            <AudioPlayer />
          </Route>
          <Route path='/users/:userId/songs'>
            <Navigation isLoaded={isLoaded} />
            <UserSongs />
            <AudioPlayer />
          </Route>
          <Route path='/'>Page not found</Route>
        </Switch>
      )}

    </>
  );
}

export default App;
