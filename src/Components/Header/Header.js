import React from 'react'
import styles from './Header.module.css'

const header =()=>{
    return(
        <div className={styles.Header}>
            <div className={styles.Header_content}>
                <div className="brand_icon">Brand Icon</div>
                <div className="site_title">
                    <p>Lyrics Finder</p>
                </div>
                <div className={styles.brand_links}>
                    <p>Link 1</p>
                    <p>Link 2</p>
                </div>
            </div>

        </div>
    )
}

export default header