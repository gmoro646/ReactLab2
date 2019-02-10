import React from 'react'
import FavouriteItem from './FavoriteItem'

const favorites = (props) => {
    console.log(props.id);
    return (
        <section className="favorites">
            <p>Favourites❤</p>
            <FavouriteItem/>
        </section>)

};
export default favorites

// import React from 'react'
// import FavouriteItem from './FavoriteItem'
// import '../index.css'
//
// // class Favorites extends React.Component {
// //
// //     render() {
// //         // console.log(props)
// //         return (
// //             <div className="favorites">
// //                 <FavouriteItem/>
// //             </div>);
// //
// //     }
//
// const favourites = (props) => {
//
//     return (
//
//         <div className="favorites">
//             <FavouriteItem/>
//         </div>);
// )
//
//
// // render() {
// //     if (this.props.photos.length > 1) {
// //         return (
// //             <div className="Favourites">
// //                 {this.props.favourites.map((p) =>
// //                     <FavoriteItem
// //                         // photo={p}
// //                         // key={p.id}
// //                         // showImageDetails={this.props.showImageDetails}
// //                     />)}
// //
// //             </div>
// //
// //         );
// //     } else {
// //         return null;
// //     }
// //
// // }
// }
//
// export default Favorites