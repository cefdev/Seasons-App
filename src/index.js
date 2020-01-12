// Import React and ReactDOM
import React from "react";
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';

// Create a React component
class App extends React.Component {

    state = {
        lat: null,
        errorMessage: ""
    }

    // Get the current position before the content rendered in the UI
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // Get latitude cords and set it to state
            position => this.setState({lat: position.coords.latitude}),
            // In case something wrong happened or the user denied location request
            err => this.setState({errorMessage: err.message})
        );
    }

    // React says we have to define render
    render() {   
        // In case something wrong happened or the user denied location request, Set Error Message to state.lat
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        
        // If we get the location, Set latitude to state.lat
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat = {this.state.lat}/>
        }

        // Show this content before the user accept / denied location request
        return (
            <Spinner message="Please accept location request" />
        )
    }
};

// Render the content in UI
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);