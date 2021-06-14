import React from 'react';
import styles from './Sound.module.css';
import { Props } from './types';
import ReactPlayer from 'react-player';

export default class Sound extends React.PureComponent<Props> {
    render() {
        const { id, url, volume, playing, loop } = this.props;

        return (
            <div className={styles.playerWrapper}>
                <ReactPlayer
                    className={styles.reactPlayer}
                    id={id}
                    url={url}
                    volume={volume}
                    playing={playing}
                    loop={loop}
                    width="100%"
                    height="100%"
                />
            </div>
        );
    }
}
