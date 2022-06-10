## myFlix-client
To build a client-side component of a “movies” web application. The web application will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.

## Built With
- HTML;
- sCSS;
- JavaScript;
- React.js(parcel)
- Redux
- Axios

## User Goals
Users should be able to :
- Return data (description, genre, director, image URL, whether featured or not) about a single movie by title to the user movies or update their user information, including their "Favorite Movies" list.
- Return details about a genre (description) by name/title ( e.g, "Thriller").
- By name, return information about a director (bio, birth year, death year).
- Allow to sign up (new users).
- Modify their confidential info (username, password, email, date of birth).
- Allow additions of movies to their favourites list.
- Allow removal of movies from their favourites list.
- facilitate their deregistration.

## Technicalities.
- Single-page application (SPA)
- Uses state routing to navigate between views and share URLs
- Gives users the option to filter movies
- Initially uses Parcel as its build tool
- Written with React library and React Redux
- Uses React Bootstrap as a UI library for styling and responsiveness
- Contains a mix of class components and function components

* Project setup: in the package.json the entry point may not be "main", because main is used as the output file of the build. Instead define the source code for the library as follows:
```bash
"source": "src/index.html"
```
Use index.html as entry point for build process: parcel src/index.html

* Parcel: the command parcel src/index.html threw an error, saying
```bash
@parcel/package-manager: Could not find module "@parcel/transformer-sass" satisfying 2.0.0-rc.0
```
the solution was to remove the @oarcel/transformer-sass:^2.4.1 from the package.json,  deleting node-modules and package-lock.json file and then run npm install. As a result the version 2.0.0-rc.0 was installed and added as a dependencies.

* Parcel build process threw error, which was solved by adding type="module" to script tag in index.html
* add to package.json
```bash
"start": "parcel", // parcel watch + dev server
"watch": "parcel watch", // parcel build + automatic reload
"build": "parcel build"
```

* There is a new version of react-router-dom (6.3.0) which differs significantly from the version used by CF (v.5.3.0). I had to downgrade to the older version in order to be able to follow the directions provided by CF for routing between the views.

* React Redux has some pitfalls when loading data from an API (in this case, waiting for the user and movies state to be successfully set before setting the favorite movies state). Therefore, try using Redux toolkit (RTK) to fix this!

* Avoid passing down props to more than one compnent, bad practice! (props drilling) --> Use state managment! (e.g., Redux)

## How to install and run the project ...

### ... as a developer, who wants to work with the project
1. Clone or download repository ...
```bash
git clone https://github.com/marktony1348/myFlix-client.git
```

2. Run parcel to build
```bash
parcel src/index.html
```

## Development Process of the Client-Side for myflix Application

### Create React components for each view
* Main View routes to all sub views using react-router-dom
* Create functional component for each sub view // distinct functionality in view
* Use bootstrap Card component to create Movie card for each movie

### Connect to database via axios
* Get data on movies and users from API using axios library

### Use Redux for state management
* User & movie data is accessed and modified from different components --> Use redux to mangage state in one place (store)
* Same for favorite movies --> Has to be loaded once both user and movie data states are successfully set
### TBD: Host application! (e.g., on Netlify)
## Acknowledgments
- CareerFoundry tutors and mentors.
