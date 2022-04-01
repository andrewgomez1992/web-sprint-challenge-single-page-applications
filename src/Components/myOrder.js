import React from 'react';
import { useParams } from 'react-router-dom';


const MyOrder = () => {

    const myOrder = useParams();
    console.log("WTF")

    return (
        <>
            <div>
                <h1>My Order</h1>
                <div>
                    <img src={`https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg`} />
                </div>
            </div>
        </>
    )
}

export default MyOrder;