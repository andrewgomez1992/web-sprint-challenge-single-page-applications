import React from 'react';
import { useParams, useHistory } from 'react-router-dom';


const OrderForm = () => {

    const { pizza } = useParams();
    const history = useHistory();

    const SubmitHandler = (evt) => {
        evt.preventDefault();
        history.push("/myorder");
    }

    return (
        <>
            <div className="buildpizza">
                <h1>Create Your Pizza!</h1>
                <div>
                    <img src={`https://media.istockphoto.com/photos/clap-hands-of-baker-with-flour-in-kitchen-picture-id1134470382?k=20&m=1134470382&s=612x612&w=0&h=bXL_rP7xXfB9htp-eiiQPgzv4qtVgh7SoriOZorun8c=`} />
                </div>
                <form onSubmit={SubmitHandler}>
                    <label>Size
                        <select
                            // onChange={onChange}
                            // value={values.role}
                            name='size'
                        >
                            <option value=''>- Select -</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                    <label>
                        <input type="text" name="" id="" />
                    </label>
                    <input type="password" name='password' id="" />
                    <button className="createbtn" type="submit">Create My Pizza!</button>
                </form>
            </div>
        </>
    )
}

export default OrderForm;