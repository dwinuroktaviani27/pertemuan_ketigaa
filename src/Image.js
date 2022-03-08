import React, { Component } from 'react'; class Image extends
    Component {
    render() {
        return (
            <img src={this.props.linkGambar} alt="Food" width='100' />
        );
    }
} export default Image;
