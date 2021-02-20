import React, { useState, useEffect } from 'react';
import ImageOfMe from '../../public/me.png'
import Title from '../title/title.js'
import style from './image.module.css';

const Image = () => {
    return (
        <div id={style.outerimagecontainer}>
            <img id={style.imagecontainer} src={ImageOfMe} />
            <Title text={"George Gilliland"} links={false}/>
            <Title text={"Senior Techincal Consultant @ Tray.io"} links={false}/>
            <Title text={"Bedroom Musician"} links={false}/>
            <Title text={"LinkedIn // Github"} links={true}/>
        </div>
    )
};

export default Image;
