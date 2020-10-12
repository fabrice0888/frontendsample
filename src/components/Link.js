import React from 'react';

const Link = ({ className, href, children, impPath }) => {

    const bannerContent = {
        color: "White",
        padding: "10px"
    };


    const onClick = (event) => {

        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <span>

            <img style={{ verticalAlign: 'middle' }} src={process.env.PUBLIC_URL + impPath} width="20" height="20" alt='Not needed' />

            <a style={bannerContent} onClick={onClick} className={className} href={href}>
                {children}
            </a>
        </span>
    );
};

export default Link;
