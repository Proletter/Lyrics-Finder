import styles from './Main.module.css'
import React from 'react'


function main({setSearch, searchValue, isSearching, results}){


    return(
        <div className={styles.main}>
            <div>
                <div className="form_part">
                <label className={styles.search} htmlFor="inpt_search">
			<input type="text" onChange={setSearch} value={searchValue} />
    {isSearching? <div>isSearching....</div>:<div>{results}</div>}
		</label>

                </div>
                <div className="lyrics">

                </div>
            </div>
    </div>
    )
}

export default main