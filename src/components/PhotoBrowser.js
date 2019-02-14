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
            <section>
                {/*<Favorites favorites={this.state.favorites}*/}
                           {/*// addFavorites={this.addFavorites}*/}
                {/*/>*/}
                <div className="container">

                    <PhotoList photos={this.props.photos}
                               showImageDetails={this.showImageDetails}
                               addFavorites={this.addFavorites}
                    />

                    <EditPhotoDetails photos={this.props.photos}
                                      currentPhoto={this.state.currentPhoto}
                                      updatePhoto={this.props.updatePhoto}
                    />
                </div>
            </section>


        );
    }

    showImageDetails = (id) => {
        this.setState({currentPhoto: id});
    };

    addFavorites=(id)=>{
        const fave=this.state.favorites;
        // this.setState( {favorites: id});
    };



}

export default PhotoBrowser