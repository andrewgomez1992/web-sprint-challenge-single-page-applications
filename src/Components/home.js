import React from 'react';
import { useParams } from 'react-router-dom';


const Home = () => {

    const Home = useParams();
    console.log("WTF")

    return (
        <>
            <div>
                <h1>Pizza for Programmers</h1>
                <div className="homepage">
                    <button className="homebtn">Pizza?</button>
                    <img src={`https://media.istockphoto.com/photos/chef-takes-out-a-hot-pizza-from-the-oven-picture-id1063976282?k=20&m=1063976282&s=612x612&w=0&h=k43wDUMzYPp8K4fxYIUvE3lpVzZLnZW4_IWUFG4KXEM=`} alt="Photo of Pepporoni and Olive Pizza" />
                </div>
            </div>
        </>
    )
}

export default Home;