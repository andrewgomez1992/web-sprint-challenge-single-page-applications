import React from 'react';
import { useParams, useHistory } from 'react-router-dom';


const Home = () => {

    const history = useHistory();

    const SubmitHandler = (evt) => {
        evt.preventDefault();
        history.push("/pizza");
    }

    return (
        <>
            <div>
                <h1>Pizza for Programmers</h1>
                <form onSubmit={SubmitHandler}>
                    <div className="homepage">
                        <button id="order-pizza" className="homebtn">Order Now!</button>
                        <img src={`https://media.istockphoto.com/photos/chef-takes-out-a-hot-pizza-from-the-oven-picture-id1063976282?k=20&m=1063976282&s=612x612&w=0&h=k43wDUMzYPp8K4fxYIUvE3lpVzZLnZW4_IWUFG4KXEM=`} alt="Photo of Pepporoni and Olive Pizza" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Home;