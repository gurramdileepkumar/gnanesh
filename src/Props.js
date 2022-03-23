import React, { Component } from 'react';
 import Props1 from './Props1';
 import './Styles.css'
class Props extends Component {
    render() { 
        return (
            <div>
                {/* <div style={{color: 'red'}}>
                <Props1 name="bit technologies"/>
                </div>
                <Props1 name="nikhil" />
                <Props1 name="swathi" />
                <Props1 name="samad" /> */}
                <div className="cards">
                <Props1 
                mname="krack"
                img="https://i0.wp.com/www.newsbugz.com/wp-content/uploads/2019/11/Krack-Telugu-Movie2.jpg?resize=700%2C992&ssl=1" 
                />
                <Props1 mname="nikhil"
                 img="https://www.25cineframes.com/images/gallery/2020/08/megastar-chiranjeevi-152-telugu-movie-first-look-ultra-hd-posters/06-Megastar-Chiranjeevi-152-Acharya-Telugu-Movie-First-Look-ULTRA-HD-Posters-WallPapers-Chiru-152nd-Film-Posters.jpg" />
            </div>
            </div>
        );
    }
}
 
export default Props;