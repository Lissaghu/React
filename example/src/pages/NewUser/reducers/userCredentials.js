import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userCredentials: {
        firstName: '',
        lastName: '',
    },
    isSubmitting: false,
}

const userCredentialsSlice = createSlice({
    name: 'userCredentialsSlice',
    initialState,
    reducers: {
        setCredentials(state, { payload }) {
            state.userCredentials = payload
        },
        setFirstName(state, { payload }) {
            state.userCredentials.firstName = payload
        },
        setLastName(state, { payload }) {
            state.userCredentials.lastName = payload
        },
        resetCredentials(state) {
            state = initialState
        },
        setUserSubmitting(state, { payload }) {
            state.isSubmitting = payload
        },
    },
})

export const {
    setCredentials,
    setFirstName,
    setLastName,
    resetCredentials,
    setUserSubmitting
} = userCredentialsSlice.actions

export default userCredentialsSlice.reducer
