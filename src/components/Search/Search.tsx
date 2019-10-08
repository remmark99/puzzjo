import React from 'react';
import SearchInput from '../SearchInput';
import styles from './Search.module.css';

const Search: React.FC = () => {
    return (
        <>
            <div className={`${styles.container} container`}>
                <div className={styles.top}>
                    <div className={styles.tabs}>
                        <input className={styles.radio} type="radio" name="search" id="job" defaultChecked/>
                        <label htmlFor="job" className={`${styles.tab} ${styles.firstTab}`}>find a job</label>
                        <input className={styles.radio} type="radio" name="search" id="candidate"/>
                        <label htmlFor="candidate" className={styles.tab}>find a candidate</label>
                    </div>
                    <span className={styles.text}>We have <span>69.368</span> job offers for you! Browse job offers by <span>Category</span></span>
                </div>
            </div>
            <div className={`container ${styles.bottomContainer}`}>
                <div className={styles.inputs}>
                    <SearchInput placeholder="Keywords"/>
                </div>
            </div>
        </>
    );
}

export default Search;