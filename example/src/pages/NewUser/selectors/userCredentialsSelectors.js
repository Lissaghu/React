import { createSelector } from '@reduxjs/toolkit'

export const userCredentialsRootSelector = state => {
    return state.userCredentialsSlice
}

export const userIsSubmittingSelector = createSelector(
    userCredentialsRootSelector,
    (user) => user.isSubmitting
)

export const userFirstNameSelector = createSelector(
    userCredentialsRootSelector,
    (user) => user.userCredentials.firstName
)

export const userLastNameSelector = createSelector(
    userCredentialsRootSelector,
    (user) => user.userCredentials.lastName
)
