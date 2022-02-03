import { object, string } from "yup"

const fieldRequired = `Ты чо ебать`

export const NewUserSchema = object().shape({
    firstName: string().required(fieldRequired),
    lastName: string().required(fieldRequired),
})
