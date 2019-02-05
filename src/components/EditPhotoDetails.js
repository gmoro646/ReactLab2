import React from 'react';
import './EditPhotoDetails.css';

class EditPhotoDetails extends React.Component {
    render() {
        const id = this.props.currentPhoto;
        console.log(id);
        const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;
        if (this.props.photos.length > 0) {
            const photo = this.props.photos.find (p => p.id === id);


            return (
                <article className="details">
                    <div className="detailsPhotoBox">
                        <form className='photoForm'>
                            <legend>Photo Details</legend>
                            <img src={imgURL + photo.path} alt={photo.title}/>

                            <label>Title</label>
                            <input type='text' name='title'
                                   value={photo.title}
                                   onChange={this.handleChange}
                            />

                            <label> City</label>
                            <input type='text' name='country'
                                   value={photo.city}
                                   onChange={this.handleChange}
                            />

                            <label>Country</label>
                            <input type='text' name='country'
                                   value={photo.country}
                                   onChange={this.handleChange}
                            />

                        </form>

                    </div>

                </article>
            );
        } else {
            return null;
        }

    }

    handleChange = e => {
        // find the current photo in our photo array
        const id = this.props.currentPhoto;
        const photo = this.props.photos.find( p => p.id === id);
        // update the photo using these 3 steps ...

        // 1. make a clone of the current photo object
        const clonedPhoto = { ...photo };

        // 2. update value of field that just changed
        clonedPhoto[e.currentTarget.name] = e.currentTarget.value;

        // 3. tell parent (or above) to update the state for this photo
        this.props.updatePhoto(this.props.currentPhoto, clonedPhoto);
    }

}

export default EditPhotoDetails
