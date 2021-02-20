import React, { useState, useEffect } from 'react';
import styles from './cursor.module.css';

const Cursor = ({position}) => {
    return (
        <div id={styles.cursor} style={position}></div>
    )
};

export default Cursor;
