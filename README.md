# Travelist

## About

Travelist is your way to organize what you want to do and see on your next trip. The goal of the Travelist application is to allow users to create an account, login, and create/edit personal travel itineraries.

After signing up and/ or logging in, users are directed to the main page where they can create a new trip by inputting a location and country for that location. From there, a new activities page is created. Within the activities page, their activities for that location are populated if they already exist in the database, and it allows them to import new activities. Activities only require a name or title but can also include a link to where they discovered the activity, an address, and their notes about the activity. All of this is input in a modal that pops up upon clicking the “add activity” button.

We used B-crypt encryption and authentication, so that users’ passwords are hashed and salted securely, then stored in the PostgreSQL database.

The server and back end were built with node.js and express. The front end utilizes React, React-Redux, React-bootstrap, and React-router.
