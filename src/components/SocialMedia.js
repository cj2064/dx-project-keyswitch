import React, { Component } from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import '../styles/SocialMedia.css';

export class SocialMedia extends Component {
    render() {
        return (
            <div className="container col-md-3">
                <FaFacebookSquare className="media-icon mx-5 my-5"/>
                <FaTwitter className="media-icon mx-5 my-5"/>
                <FaInstagram className="media-icon mx-5 my-5"/>
            </div>
        )
    }
}

export default SocialMedia
