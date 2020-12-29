import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {render} from "@testing-library/react";
class Track extends Component {
    render() {
        let song = null;

        switch (this.props.type) {
            case ('guitar'):
                song = "http://www.youtube.com/embed/flVtAcripow";
                break;
            case ('piano') :
                song = "http://www.youtube.com/embed/tT9Eh8wNMkw&list=RDQ0AxSOsOo0c&index=6";
                break;
            case ('sax') :
                song = "http://www.youtube.com/embed/GSLdcEaUOJ0";
                break;

            default :
                song = null;

        }

  return song



    }
}


export default Track;
