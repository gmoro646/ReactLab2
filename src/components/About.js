import React from 'react'
import './Home.css'
import {Link} from "react-router-dom";

class About extends React.Component {
    render() {
        return (
            <div className="banner">
                <div>
                    <h1>About Page</h1>
                    <h3> By Giohanny Moros</h3>
                    <p>
                        <Link to='/home'>
                            <button>Home</button>
                        </Link>
                        <Link to='/browse'>
                            <button>Browse</button>
                        </Link>

                    </p>
                </div>
            </div>

        );
    }
}

export default About