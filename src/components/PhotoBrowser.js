import React from 'react';
import PhotoList from './PhotoList.js'
import EditPhotoDetails from './EditPhotoDetails.js'
import Favorites from "./Favorites";

class PhotoBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPhoto: 1,
            favorites:[]

        };
    }

    render() {
        console.log(this.state.favorites);
        return (

            <div className="container">

                <PhotoList photos={this.props.photos}
                           showImageDetails={this.showImageDetails}/>

                <EditPhotoDetails photos={this.props.photos}
                                  currentPhoto={this.state.currentPhoto}
                                  updatePhoto={this.props.updatePhoto}
                />
            </div>

        );
    }

    showImageDetails = (id) => {
        this.setState({currentPhoto: id});
    }

    addFavourites=(id)=>{
        let fave= this.state.favorites.slice();
        fave.push(id);
        this.setState({favorites:fave});
    }



}

export default PhotoBrowser