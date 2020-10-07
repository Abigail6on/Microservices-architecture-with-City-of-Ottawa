import UserService from "#root/adapters/UserService";

const UserSession = {
    user: aync userSession => {
        return await UserService.fetchUser({ userId: userSession.userId});
    }
}

export default UserSession;