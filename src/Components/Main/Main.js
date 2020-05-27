import styles from './Main.module.css'
import React from 'react'


function main(props){


    return(
        <div className={styles.main}>
            <div>
                <div className="form_part">
                <label className={styles.search} htmlFor="inpt_search">
			<input type="text" onChange={props.getLyrics} value={props.searchValue} />
		</label>

                </div>
                <div className="lyrics">

                </div>
            </div>
    </div>
    )
}

export default main