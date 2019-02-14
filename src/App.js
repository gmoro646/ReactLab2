import React, {Component} from 'react';
import HeaderApp from './components/HeaderApp.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import * as cloneDeep from 'lodash/cloneDeep';
import {Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import Favorites from "./components/Favorites";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
        };
    }

    render() {
        return (

            <div>
                <HeaderApp/>
                <Route path='/' exact component={Home}/>
                <Route path='/home' exact component={Home}/>
                <Route path='/about' exact component={About}/>
                <Route path='/browse' exact
                       render={(props) =>

                           <PhotoBrowser
                               photos={this.state.photos}
                               updatePhoto={this.updatePhoto}
                           />
                       }

                />

            </div>
        );
    }

    async componentDidMount() {
        try {
            const url = "http://randyconnolly.com/funwebdev/services/travel/images.php";
            const response = await fetch(url);
            const jsonData = await response.json();
            this.setState({photos: jsonData});
        } catch (error) {
            console.log(error);
        }
    }

    updatePhoto = (id, photo) => {
        // Create deep clone of photo array from state.
        // We will use a lodash function for that task.
        const copyPhotos = cloneDeep(this.state.photos);
        // find photo to update in cloned array
        const photoToReplace = copyPhotos.find(p => p.id === id);
        // replace photo fields with edited values
        photoToReplace.title = photo.title;
        photoToReplace.city = photo.city;
        photoToReplace.country = photo.country;
        this.setState({photos: copyPhotos});
    }
    showFavourites = (id) => {
        const fave=this.state.fave;

        // this.setState({: id});
    }


}

export default App;
