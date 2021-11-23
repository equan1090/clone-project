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
import AudioBar from "./components/AudioPlayer";
import ProtectedRoute from "./ProtectedRoute";
import EditProfile from "./components/EditProfile";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const location = ['home', 'createAlbum', 'uploadSong']
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
            <Navigation props={location[0]}/>
            <HomePage />
            </ProtectedRoute>
          <ProtectedRoute path="/users/:userId/albums">
            <Navigation />
            <AlbumPage />
            <AudioBar />
          </ProtectedRoute>
          <ProtectedRoute exact path="/users/:userId">
            <Navigation />
            <UserPage />
            <AudioBar />
          </ProtectedRoute>
          <ProtectedRoute exact path="/users/:userId/edit">
            <Navigation />
            <EditProfile />
          </ProtectedRoute>
          <Route path="/login">
            <Navigation />
            <LoginFormPage />
            <AudioBar />
          </Route>
          <Route path="/signup">
            <Navigation />
            <SignupFormPage />
            <AudioBar />
          </Route>
          <ProtectedRoute path='/albums/:albumId/edit'>
           <Navigation />
            <EditFormPage />
            <AudioBar />
          </ProtectedRoute>
          <ProtectedRoute path="/albums/:albumId/songs">
            <Navigation />
            <SpecificAlbum />
            <AudioBar />
          </ProtectedRoute>
          <ProtectedRoute path="/albums/new">
            <Navigation props={location[1]}/>
            <AlbumFormPage />
            <AudioBar />
          </ProtectedRoute>
          <ProtectedRoute path="/songs/new">
            <Navigation props={location[2]}/>
            <SongFormPage />
            <AudioBar />
          </ProtectedRoute>
          <ProtectedRoute exact path="/songs/:songId">
            <Navigation />
            <SongPage />
            <AudioBar />
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId/songs'>
            <Navigation />
            <UserSongs />
            <AudioBar />
          </ProtectedRoute>
          <Route path='/'>Page not found</Route>

        </Switch>

      )}

    </>
  );
}

export default App;
