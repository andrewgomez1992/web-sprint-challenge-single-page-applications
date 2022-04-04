import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as yup from "yup";
import schema from '../formSchema'
import { useHistory } from 'react-router-dom';

const initialOrderValues = {
    name: "",
    size: "",
    sauce: "",
    Olives: false,
    Bacon: false,
    Mushrooms: false,
    Jalapenos: false,
    Cheesier: false,
    instructions: "",
};

const initialOrderErrors = {
    name: "",
    size: "",
    sauce: "",
};

// const initialOrder = []
// const initialDisabled = true


const OrderForm = ({ order, setOrder }) => {



    const [orders, setOrders] = useState([]);
    const [orderValues, setOrderValues] = useState(initialOrderValues);
    const [orderErrors, setOrderErrors] = useState(initialOrderErrors);
    const [disabled, setDisabled] = useState(true);
    const history = useHistory();

    const postNewOrder = newOrder => {
        axios.post('https://reqres.in/api/orders', newOrder)
            .then((res) => {
                setOrders([res.data, ...orders]);
                setOrderValues(initialOrderValues)
                console.log(orders)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setOrderErrors({ ...orderErrors, [name]: "" }))
            .catch((err) => setOrderErrors({ ...orderErrors, [name]: err.errors[0] }));
    };

    const change = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        inputChange(name, valueToUse);
    };

    const inputChange = (name, value) => {
        validate(name, value);
        setOrderValues({ ...orderValues, [name]: value, });
    };

    const SubmitHandler = (evt) => {
        evt.preventDefault();
        setOrders([...orders, order])
        const newOrder = {
            name: orderValues.name.trim(),
            size: orderValues.size.trim(),
            sauce: orderValues.sauce.trim(),
            toppings: ["Olives", "Bacon", "Mushrooms", "Jalapenos", "Cheesier"]
                .filter((topping) => orderValues[topping]),
            instructions: orderValues.instructions,

        };
        postNewOrder(newOrder);
    }

    useEffect(() => {
        schema.isValid(orderValues)
            .then((valid) => {
                setDisabled(!valid);
            });
    }, [orderValues]);




    return (
        <>
            <div className="buildpizza">
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Indie+Flower&family=Oswald&family=Rubik+Glitch&display=swap" rel="stylesheet"></link>
                <h1>Create your pizza!</h1>
                <div>
                    <img src={`https://media.istockphoto.com/photos/clap-hands-of-baker-with-flour-in-kitchen-picture-id1134470382?k=20&m=1134470382&s=612x612&w=0&h=bXL_rP7xXfB9htp-eiiQPgzv4qtVgh7SoriOZorun8c=`} />
                </div>
                <form onSubmit={SubmitHandler} id="pizza-form">
                    <label>Size
                        <select id="size-dropdown" onChange={change} value={orderValues.size} name='size'>
                            <option value=''>- Size -</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                        </select>
                        <h5>Pizza size required</h5>
                    </label>
                    <div className="errors">{orderErrors.size}</div>
                    <div className="sauce">
                        <h3>Sauce</h3>
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                value='Marinara'
                                onChange={change}
                                checked={orderValues.sauce === "Marinara"}
                            />Marinara
                        </label>
                        <br />
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                value='Roasted Garlic'
                                onChange={change}
                                checked={orderValues.sauce === "Roasted Garlic"}
                            />Roasted Garlic
                        </label>
                        <br />
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                value='Garlic Ranch'
                                onChange={change}
                                checked={orderValues.sauce === "Garlic Ranch"}
                            />Garlic Ranch
                        </label>
                        <br />
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                value='BBQ Sauce'
                                onChange={change}
                                checked={orderValues.sauce === "BBQ Sauce"}
                            />BBQ Sauce
                        </label>
                        <h3>Toppings</h3>
                        <label>
                            <input
                                key="0"
                                type="checkbox"
                                name="Olives"
                                onChange={change}
                                checked={orderValues.Olives}
                            />Olives
                        </label>
                        <br />
                        <label>
                            <input
                                key="1"
                                type="checkbox"
                                name="Bacon"
                                onChange={change}
                                checked={orderValues.Bacon}
                            />Bacon
                        </label>
                        <br />
                        <label>
                            <input
                                key="2"
                                type="checkbox"
                                name="Mushrooms"
                                onChange={change}
                                checked={orderValues.Mushrooms}
                            />Mushrooms
                        </label>
                        <br />
                        <label>
                            <input
                                key="3"
                                type="checkbox"
                                name="Jalapenos"
                                onChange={change}
                                checked={orderValues.Jalapenos}
                            />Jalapenos
                        </label>
                        <br />
                        <label>
                            <input
                                key="4"
                                type="checkbox"
                                name="Cheesier"
                                onChange={change}
                                checked={orderValues.Cheesier}
                            />Extra Cheese
                        </label>
                        <br />
                        <h4 id="special-text">Special Instructions</h4>
                        <input className="specialinstructions"
                            type="text"
                            name="instructions"
                            placeholder="Here are the special instructions"
                            value={orderValues.instructions}
                            onChange={change}
                        />
                    </div>
                    <br />
                    <label>Name{" "}
                        <input
                            id="name-input"
                            type="text"
                            name="name"
                            value={orderValues.name}
                            placeholder="Enter your name"
                            onChange={change} />
                    </label>
                    <div className="errors">{orderErrors.name}</div>
                    <button type="submit" disabled={disabled} id="order-button">Add to Order</button>
                    <div className="order-container">
                        {orders.map((order) => {
                            if (!order) {
                                return <h3>Preparing your order...</h3>;

                            }
                            return (
                                <div className="order-details">
                                    <h2>{order.name}, your pizza is on the way!</h2>
                                    <h4>Size:</h4>
                                    <p>{order.size}</p>
                                    <h4>Sauce:</h4>
                                    <p>{order.sauce}</p>
                                    <h4>Toppings:</h4>
                                    <p>{order.toppings[0]}</p>
                                    <p>{order.toppings[1]}</p>
                                    <p>{order.toppings[2]}</p>
                                    <p>{order.toppings[3]}</p>
                                    <p>{order.toppings[4]}</p>
                                    <h4>Here are the special instructions:</h4>
                                    <p>{order.instructions}</p>
                                </div>
                            );
                        })}
                    </div>
                </form>
            </div>
        </>
    )
}

export default OrderForm;