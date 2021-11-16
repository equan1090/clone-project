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
import ProtectedRoute from "./ProtectedRoute";
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
          <ProtectedRoute exact path='/home'>
            <Navigation isLoaded={isLoaded} />
            <HomePage />
            <AudioPlayer />
            </ProtectedRoute>
          <ProtectedRoute path="/users/:userId/albums">
            <Navigation isLoaded={isLoaded} />
            <AlbumPage />
            <AudioPlayer />
          </ProtectedRoute>
          <ProtectedRoute exact path="/users/:userId">
            <Navigation isLoaded={isLoaded} />
            <UserPage />
            <AudioPlayer />
          </ProtectedRoute>
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
          <ProtectedRoute path='/albums/:albumId/edit'>
           <Navigation isLoaded={isLoaded} />
            <EditFormPage />
            <AudioPlayer />
          </ProtectedRoute>
          <ProtectedRoute path="/albums/:albumId/songs">
            <Navigation isLoaded={isLoaded} />
            <SpecificAlbum />
            <AudioPlayer />
          </ProtectedRoute>
          <ProtectedRoute path="/albums/new">
            <Navigation isLoaded={isLoaded} />
            <AlbumFormPage />
            <AudioPlayer />
          </ProtectedRoute>
          <ProtectedRoute path="/songs/new">
            <Navigation isLoaded={isLoaded} />
            <SongFormPage />
            <AudioPlayer />
          </ProtectedRoute>
          <ProtectedRoute exact path="/songs/:songId">
            <Navigation isLoaded={isLoaded} />
            <SongPage />
            <AudioPlayer />
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId/songs'>
            <Navigation isLoaded={isLoaded} />
            <UserSongs />
            <AudioPlayer />
          </ProtectedRoute>
          <Route path='/'>Page not found</Route>
        </Switch>
      )}

    </>
  );
}

export default App;
