import styles from './NewUser.module.scss'
import { connect, useDispatch } from "react-redux"
import { Formik, Form, Field } from 'formik'
import {
    userFirstNameSelector,
    userIsSubmittingSelector,
    userLastNameSelector
} from "./selectors"
import { setUserSubmitting } from "./reducers/userCredentials"
import { NewUserSchema } from "./utils/schema"
import { createNewUserAction } from "./actions"
import { Loader } from "rsuite"
import { createBrowserHistory } from 'history'

const initialValues = {
    firstName: '',
    lastName: '',
}

const NewUser = ({
    setUserSubmitting,
    isSubmitting,
    firstName,
    lastName,
}) => {
    const dispatch = useDispatch()
    const history = createBrowserHistory()

    const handleCancelClick = () => {
        history.back()
    }

    const handleSubmitClick = (userCredentials) => {
        setUserSubmitting(true)
        dispatch(createNewUserAction(userCredentials))
    }

    return (
        <div style={{height: '100%'}}>
            {isSubmitting ? (
                <Loader size="lg" backdrop center content="Сиди перди пока" />
            ) : (
                <>
                    <h1>{`Последний созданный юзер: ${firstName} ${lastName}`}</h1>
                    <Formik
                        validationSchema={NewUserSchema}
                        initialValues={initialValues}
                        onSubmit={(values) => handleSubmitClick(values)}
                        validateOnChange={true}
                    >
                        {({ errors, touched }) => (
                            <Form className={styles.content}>
                                <Field name="firstName" />
                                {touched.firstName && errors.firstName
                                    && <div>{errors.firstName}</div>
                                }
                                <Field name="lastName" />
                                {touched.lastName && errors.lastName
                                    && <div>{errors.lastName}</div>
                                }
                                <button type="submit">
                                    Создать
                                </button>
                                <button type="button" onClick={handleCancelClick}>
                                    Вернуться
                                </button>
                            </Form>
                        )}
                    </Formik>
                </>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    firstName: userFirstNameSelector(state),
    lastName: userLastNameSelector(state),
    isSubmitting: userIsSubmittingSelector(state),
})

const mapDispatchToProps = {
    setUserSubmitting,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)
