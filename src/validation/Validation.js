import * as yup from 'yup'

export const userSchema = yup.object().shape({
    firstName: yup.string().max(16).required(),
    lastName: yup.string().max(16).required(),
    email: yup.string().email().required(),
    message: yup.string().required()
});