import { Component } from "react";
import ReactPlayer from 'react-player'
// import { Player } from 'react-custom-videoplayer';
import sundarVideo from '../../Assets/Videos/Sundar.mp4';

export class VideoPlayerComponent extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            muted: true,
            videoOff: false,
        }
    }

    componentWillReceiveProps(nextProps: any) {
        this.setState({
            muted: nextProps.muteAudio,
            videoOff: !nextProps.showVideo,
        });
      }

    render() {
        return <div 
            style={{
                position: 'relative',

            }}>
            {
                this.state.videoOff && (
                    <div 
                        className = "videoOff-true"
                        style={{
                        position: 'absolute',
                        display: `flex`,
                        backgroundColor: 'black',
                        height: '360px',
                        width: '640px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}>
                        <div className="videoOffName">
                            {'SP'}
                        </div>
                    </div>
                )
            }
            <ReactPlayer 
                style={{
                    zIndex: 9,
                }}
                url={sundarVideo}
                muted={this.state.muted}
                playing
                config={{
                    file: {
                        forceAudio: this.state.videoOff
                    }
                }}
            />
        </div>;
    }
    
}