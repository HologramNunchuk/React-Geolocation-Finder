import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {

//   window.navigator.geolocation.getCurrentPosition(
//     (position) => (console.log(position)),
//     (error) => console.log(error)
//   );
//   return <div>Latitude: </div>
// };

class App extends React.Component {

//   constructor(props) {
//     super(props);
//     // THIS IS THE ONLY time we do direct assignment to 'this.state'
//     this.state = {lat: null, errorMessage: ''};

// }

// This is another way to initiate the state without using the constructor function above
// Babel will create a constructor function as above and you'll have access to the props.
// This method of initiating the state is the exact same as above because Babel will
// create a constructor for you.
state = {lat: null, errorMessage: ''}

componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}),
        error => this.setState({errorMessage: error.message}));
};

   // Lifecycle method. This is called automatically when our component renders to the screen
  //  componentDidMount() {
  //    console.log('The application has rendered.')
  //  }

  // Lifecycle method. This is called automatically when our component rendered again/updated
  //  componentDidUpdate() {
  //    console.log('Component has updated and rendered again.')
  //  }



  // Helper function
renderContent() {
       //  Conditional Rendering
       if (this.state.errorMessage && !this.state.lat) {
         return <div > Error: {
           this.state.errorMessage
         } </div>
       }

       if (!this.state.errorMessage && this.state.lat) {
         return <SeasonDisplay lat = {
           this.state.lat
         }
         />
       }

       return <Spinner message = "Please accept location request"/>
       }


       render() {
        return (
          <div className="border red">{this.renderContent()}</div>
        )
      }
}





ReactDOM.render(<App/>, document.querySelector('#root'));
