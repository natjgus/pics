import React from 'react';
//By convention add libraries you install above things you make


import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash.js';



class App extends React.Component {
    //We must initialize state so that we can interact with the dom
    //We know we want an array of images, so lets set state to have an empty array of called images
    state = { images: [] };

    //We set this onSearchSubmit to be an asynconous arrow function so that we can properly use this in the callback
    onSearchSubmit = async (term) => {
      const response = await unsplash.get('/search/photos', {
        params: { query: term },
      });

        //We need to  write a notice that has told us that the search is complete
        //An axios call always returns a promise
        //We have two options Option 1: Using .then
        //Chain on a .then function that has an arrow function that will be invoked in the future
      // }).then( response => {
      //   //To get the list of images from the whole response we want the .data.results
        //  console.log(response.data.results);
     

      this.setState({ images: response.data.results });

      //Option 2: ASYNC AWAIT SYNTAX Adding the Aync to the function (line 13) and make the axios request a const
      //Add async in front of the method, find what you are waiting to get done and asign it to a variable
    }


    render () {
    return (
        <div className="ui container" style={{marginTop: '15px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>
        );
    }
}


export default App;
