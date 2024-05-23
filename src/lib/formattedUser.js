export const formatedUser = (userObject) => {
    return {
        email: userObject?.email,
        username: userObject?.username,
        id: userObject?.id,
    }
}