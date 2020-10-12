import React from 'react';
import Link from './Link'

const topBanner = {
    backgroundColor: "Black",
    padding: "10px"
};


const Header = () => {
    return (
        <div style={topBanner} className="ui secondary pointing menu">
            <Link href="/" className="item" impPath='/blank.png'>
                <>Music Brainz</>
            </Link>
            <Link href="/Lastfm" className="item" impPath='/lastfm.png'>
                <>Last.fm</>
            </Link>
            <Link href="/Favorites" className="item" impPath='/star.png'>
                <>Favorites</>
            </Link>
        </div>
    );
};

export default Header;
