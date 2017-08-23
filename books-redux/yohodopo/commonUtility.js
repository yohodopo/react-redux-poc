export const setData = (e, scope) => {
    let currentTarget = e.target;
    const value = currentTarget.type === 'checkbox' ? currentTarget.checked : currentTarget.value;
    const name = currentTarget.name;
    scope.setState((prevState, props) => {
        return { [name]: value }
    })
}
