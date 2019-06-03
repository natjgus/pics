import React from 'react';
//By convention add libraries you install above things you make
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    //We must initialize state so that we can interact with the dom
    //We know we want an array of images, so lets set state to have an empty array of called images
    // state = { images: [] };


    async onSearchSubmit(term) {
      //must make a GET request to axios
      //first term in the request in the address (or path) to which we are making requests
      //Must identify yourself using your API key
      //second term is the parameters or options object
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID 5290932eb6600623a22bfb00d2be9433cb1768ca3e0452e87e91b08c5f39fb2a'
        }

        //We need to  write a notice that has told us that the search is complete
        //An axios call always returns a promise
        //We have two options Option 1: Using .then
        //Chain on a .then function that has an arrow function that will be invoked in the future
      // }).then( response => {
      //   //To get the list of images from the whole response we want the .data.results
        //  console.log(response.data.results);
      });

      console.log(response.data.results);

      //Option 2: ASYNC AWAIT SYNTAX Adding the Aync to the function (line 13) and make the axios request a const
      //Add async in front of the method, find what you are waiting to get done and asign it to a variable
    }


    render () {
    return (
        <div className="ui container" style={{marginTop: '15px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
        );
    }
}


export default App;
