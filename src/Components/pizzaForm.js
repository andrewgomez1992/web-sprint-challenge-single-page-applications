import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import * as yup from "yup";
// import schema from './formSchema'


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
                        <select id="size-dropdown"
                            // onChange={onChange}
                            // value={values.role}
                            name='size'
                        >
                            <option value=''>- Size -</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>

                        </select>
                        <h4>Required</h4>
                    </label>
                    <br />
                    <div className="sauce">
                        <h3>Sauce</h3>
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                value='Marinara'
                            // onChange={onChange}
                            // checked={values.civil === 'single'}
                            />Marinara
                        </label>
                        <br />
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                value='Roasted Garlic'
                            // onChange={onChange}
                            // checked={values.civil === 'single'}
                            />Roasted Garlic
                        </label>
                        <br />
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                value='Garlic Ranch'
                            // onChange={onChange}
                            // checked={values.civil === 'single'}
                            />Garlic Ranch
                        </label>
                        <br />
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                value='BBQ Sauce'
                            // onChange={onChange}
                            // checked={values.civil === 'single'}
                            />BBQ Sauce
                        </label>
                        <h3>Toppings</h3>
                        <label>
                            <input
                                type="checkbox"
                                name="olives"
                            //   checked={formValues.olives}
                            //   onChange={change}
                            />Olives
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="mushrooms"
                            //   checked={formValues.mushrooms}
                            //   onChange={change}
                            />Mushrooms
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="jalapenos"
                            //   checked={formValues.jalapenos}
                            //   onChange={change}
                            />Jalapenos
                        </label>
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="extraCheese"
                            //   checked={formValues.extraCheese}
                            //   onChange={change}
                            />Extra Cheese
                        </label>
                        <br />
                        <h4>Special Instructions</h4>
                        <input
                            type="text"
                            name="instructions"
                            placeholder="Enter delivery instructions"
                        //     value={formValues.instructions}
                        //     onChange={change}
                        />
                    </div>
                    <br />
                    <label>
                        <input type="text" name="" id="" />
                    </label>
                    <input type="password" name='password' id="name-input" />
                    <button className="createbtn" type="submit" id="pizza-form">Create My Pizza!</button>
                </form>
            </div>
        </>
    )
}

export default OrderForm;