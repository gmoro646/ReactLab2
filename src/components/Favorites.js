import React from 'react'
import FavouriteItem from './FavoriteItem'
import '../index.css'

class Favorites extends React.Component {

    render() {
        return (
            <div className="favorites">
                <FavouriteItem/>
            </div>);

    }

    // render() {
    //     if (this.props.photos.length > 1) {
    //         return (
    //             <div className="Favourites">
    //                 {this.props.favourites.map((p) =>
    //                     <FavoriteItem
    //                         // photo={p}
    //                         // key={p.id}
    //                         // showImageDetails={this.props.showImageDetails}
    //                     />)}
    //
    //             </div>
    //
    //         );
    //     } else {
    //         return null;
    //     }
    //
    // }
}

export default Favorites