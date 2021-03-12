import React, { useState, useEffect } from 'react';
import styles from './index.styl';


const TabComponent = () => {
    const [tab, setTab] = useState(0);
    
    useEffect(() => {
        fetch('http://192.168.0.243:3001/charly_garcia/no_soy_un_extranio')
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
