import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {render} from "@testing-library/react";
import Iframe from "react-iframe";
class Track extends Component {
    render() {
        let song = null;

        switch (this.props.type) {
            case ('andreas'):
                song = <Iframe url="http://www.youtube.com/embed/flVtAcripow" />;
                break;
            case ('leemorgan') :
                song = <Iframe url="http://www.youtube.com/embed/DvuTf-tcB1E"/>;
                break;
            case ('breker') :
                song = <Iframe url="http://www.youtube.com/embed/GSLdcEaUOJ0"/>;
                break;
                case ('benson') :
                song = <Iframe url="http://www.youtube.com/embed/JIkHn3FKBYY"/>;
                    break;

                case ('scoffed') :
                song = <Iframe url="http://www.youtube.com/embed/p0zXaHjviWg"/>;

                break;

            default :
                song = null;

        }

  return song;



    }
}
Track.propTypes = {
   // type: PropTypes.string.isRequired,
   // song: PropTypes.string.isRequired
}

export default Track;
