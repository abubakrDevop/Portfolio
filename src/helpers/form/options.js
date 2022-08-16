import { emailReg, passwordReg } from "./regex"

export const required = 'Field cannot be empty!'

export const email = {
    required,
    pattern: {
        value: emailReg,
        message: 'Email is not valid!'
    }
}

export const password = {
    required,
    pattern: {
        value: passwordReg,
        message: 'Only Latin letters and numbers!'
    },
    minLength: {
        value: 8,
        message: 'Password must contain at least 8'
    }
}

export const allInputs = {
    required,
    pattern: {
        value: true,
    }
}