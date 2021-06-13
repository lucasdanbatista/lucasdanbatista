import React from "react";

export default class Background extends React.Component {
    render() {
        return (
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/background.jpg'})`,
                width: '100vw',
                height: '100vh',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                {this.props.children}
            </div>
        );
    }
}