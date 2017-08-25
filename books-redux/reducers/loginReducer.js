const isAdmin = (localStorage.getItem("tokenId") === "YohoDopo");
export const isLoggedIn = (state = isAdmin, action) => {
    switch (action.type) {
        case "IS_LOGGED_IN":
            action.isLoggedIn === false && localStorage.removeItem("tokenId");
            return action.isLoggedIn;
        default:
            return state;
    }
}
