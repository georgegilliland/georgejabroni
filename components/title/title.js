import React, { useState, useEffect } from 'react';
import style from './title.module.css';

const Title = ({text, links}) => {

    const splitter = (text) => {
        return text.split("//").map(x=>{ return x.trim() })
    }

    if (links === true) {
        let textSplit = splitter(text);
        return (
            <div className={style.titleposition}><a href="https://www.linkedin.com/in/george-gilliland/">{textSplit[0]}</a> // <a href="https://github.com/georgegilliland">{textSplit[1]}</a></div> 
        )
    } else {
        return (
            <div className={style.titleposition}>{text}</div> 
        )
    }
};

export default Title;
