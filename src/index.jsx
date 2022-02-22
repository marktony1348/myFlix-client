import React from 'react';

import ReactDOM from 'react-dom';

import { MainView } from './components/main-view/main-view';

// Import statement to indicate that you need to bundle `./index.scss`

import './index.scss';

	import './index.scss';

class MyFlixApplication extends React.Component {

    render() {

        return (

            <MainView />



        );

    }

}

// Find the root of myFlix app
const container = document.getElementsByClassName('app-container')[0];

// Tell React to render myFlix app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);