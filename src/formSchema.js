import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().min(2, "name must be at least 2 characters"),
    size: yup.string().oneOf(["Small", "Medium", "Large"],),
    sauce: yup.string().oneOf(["Marinara", "Roasted Garlic", "Garlic Ranch", "BBQ Sauce"]),
    Bacon: yup.boolean(),
    Olives: yup.boolean(),
    Mushrooms: yup.boolean(),
    Jalapenos: yup.boolean(),
    Cheesier: yup.boolean(),
    instructions: yup.string(),
});

export default schema;