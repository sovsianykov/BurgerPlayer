import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Iframe from "react-iframe";
class Track extends Component {
    render() {
        let song = null;

        switch (this.props.type) {
            case ('andreas'):
                song = <Iframe url="https://videos.pond5.com/afro-american-jazz-band-performing-footage-113150279_main_xl.mp4"/>;
                break;
            case ('leemorgan') :
                song = <Iframe url="https://media.gettyimages.com/videos/-video-id527-176"/>;
                break;
            case ('breker') :
                song = <Iframe url="https://media.gettyimages.com/videos/jazz-player-drumming-and-smiling-rockford-illinois-usa-video-id101565419"/>;
                break;
                case ('benson') :
                song = <Iframe url="https://media.gettyimages.com/videos/jazz-musicians-in-times-square-club-video-id173471885"/>;
                    break;

                case ('scoffed') :
                song = <Iframe url="https://videos.pond5.com/1942-skeleton-marionette-made-dance-footage-136196769_main_xl.mp4"/>;



                break;

            default :
                song = null;

        }

  return song;



    }
}
Track.propTypes = {
    type: PropTypes.string.isRequired,
}

export default Track;
