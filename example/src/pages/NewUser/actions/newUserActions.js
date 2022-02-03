import { createUser } from '../api'
import { setCredentials, setUserSubmitting } from "../reducers/userCredentials"
import { batch } from "react-redux"

export const createNewUserAction = (
    userCredentials
) => async (dispatch) => {
     try {
         await createUser(userCredentials).then(() => {
             batch(() => {
                 dispatch(setUserSubmitting(false))
                 dispatch(setCredentials(userCredentials))
             })
         })
     } catch (e) {
        console.error(e)
     }
}
