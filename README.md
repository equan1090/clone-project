# Tune Cloud
Tune Coud is a sound cloud clone made to showcase my progression in learning Javascript, React, and Redux.

## Development
* To start our development
 1. Clone repository at https://github.com/equan1090/tune-cloud.git
 2. Go to the npm install in both backend and frontend directories
 3. npm start in backend first, and then frontend
 4. Navigate to localhost:3000

## Technologies Used
* Javascript
* Postgres
* HTML/CSS
* Sequelize
* React
* Redux
* Github
* Heroku

## Features
* Users
  * Users can sign up, log in, log out
  * Users can use the demo to test the site
  * Users cannot use certain features without logging in. i.e adding comments to songs
  * All forms are protected against Csurf attacks

* Albums
  * Upon login, users can create their own albums
  * Users can only edit their own albums

* Songs
  * Authorized users are able to upload their own songs
  * Authorized users can add a song to their own albums

* Comments
  * Authorized user may add a comment to a specific song

## What we learned and challenges we faced
* One major aspect we learned was the dataflow between react components. How stores interact with each other and how to pass the data between one another using thunks.
* One challenge we faced was the time constraints. We learned that we cannot add every single feature we want within our given time slot. Learning to add only the important feature to get the minimum viable product working.
* Learned how to dynamically use database queries
* We found it difficult to use css styling to accuractely position our html elements.
* Adding user authentication was extremely difficult
* A difficult challenge I had faced was getting the audio player to be present in every page while keeping the same song when changing pages. To fix this, I used context instead of stores to pass in the audio link

## Database Structure
![TuneCloud](https://user-images.githubusercontent.com/76127850/134933786-baa83392-3023-4174-8b87-5abfd681e261.png)
