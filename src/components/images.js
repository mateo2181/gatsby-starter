import React, { useEffect, useState } from 'react'

function ImagesDogs() {

    var [images, setImages] = useState([]); 

    useEffect(() => {
        function callApi() {
            fetch("/.netlify/functions/token-hider")
            .then(data => data.json())
            .then(data => {
                setImages(data.message);
                console.log(data);
            })
        };
        callApi();
    },[]);

    return (
            <div className="flex">
                {images.map((item, key) =>
                    <div className="img-dog" key={key}>
                        <img src={item}/>
                    </div>
                )}               
            </div>
    );
    
};

export default ImagesDogs;