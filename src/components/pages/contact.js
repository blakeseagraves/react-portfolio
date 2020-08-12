import React from 'react';
import contactImg from "../../../static/assets/images/auth/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div
            className="left-column"
            style={{
                backgroundImage: `url(${contactImg})`
            }}
            />

            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone-alt" />
                        </div>
                        <div className="text">
                            (949) 525-0321
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>
                        <div className="text">
                            blake.seagraves@gmail.com
                        </div>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marker-alt" />
                        </div>
                        <div className="text">
                            Chicago, Illinois
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}