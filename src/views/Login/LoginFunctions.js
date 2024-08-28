export const onEmailChange = (e, formValues, setFormValues) => {
  const email = e.target.value
  setFormValues({ ...formValues, email })
}
export const onPasswordChange = (e, formValues, setFormValues) => {
  const password = e.target.value
  setFormValues({ ...formValues, password })

}

export const onSigninClick = (navigate) => {
  navigate()
}