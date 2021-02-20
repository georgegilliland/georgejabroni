import React, { useState, useEffect } from 'react';
import Image from "../components/image/image.js";
import Cursor from "../components/cursor/cursor.js";
import style from './index.module.css';

const Index = () => {

    const [position, setPosition] = useState({ left: 0, top: 0 });

    useEffect(() => {
        const setFromEvent = (e) => setPosition({ left: e.clientX - 12.5, top: e.clientY - 12.5 });
        window.addEventListener("mousemove", setFromEvent);
    
        return () => {
          window.removeEventListener("mousemove", setFromEvent);
        };
      }, []);
    
    return (
        <div id={style.main}> 
            <Cursor position={position}/>
            <div id={style.innermain}>
                <Image />
            </div>
        </div>
    )
};

export default Index;
