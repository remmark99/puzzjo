import React from 'react';
import styles from './SearchInput.module.css';

type P = {
    placeholder?: string;
}

const SearchInput: React.FC<P> = props => {
    return <input className={styles.search} type="search" {...props}></input>
}

export default SearchInput;