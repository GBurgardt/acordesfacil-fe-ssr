import React, { useState, useEffect } from 'react';
import styles from './index.styl';

import { useParams } from "react-router-dom";

const TabComponent = () => {
    const [tab, setTab] = useState(0);
    
    const { hrefArtist, hrefSong } = useParams();

    useEffect(() => {
        
        // fetch('http://192.168.0.243:3001/sui_generis/cancion_para_mi_muerte')
        fetch(`http://192.168.0.243:3001/${hrefArtist}/${hrefSong}`)
            .then(res=>res.clone().json())
            .then(
                res => {
                    if (res.body) {
                        const { htmlTab } = res.body;

                        setTab({
                            ...res.body,
                            htmlTab: `<pre>${htmlTab}</pre>`
                        })
                    }
                }
            )
    }, []);

    return tab ?
        (
            <div className={styles.tabContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.artist}>
                        { tab.artist }
                    </div>
                    <div className={styles.songName}>
                        { tab.songName }
                    </div>
                </div>
                <div className={styles.bodyContainer}>
                    <div dangerouslySetInnerHTML={{ __html: tab.htmlTab }} />
                </div>
            </div>
        ) : (
            <div>Cargando..</div>
        )
}

export default TabComponent;
