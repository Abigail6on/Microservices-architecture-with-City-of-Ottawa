import { UsersService, UserSession } from "#root/adapters/UsersService";


const createUserSessionResolver = async (obj, { email, password }, context) => {
    const UserSession = await UsersService.createUserSession({ email, password });

    res.cookie("userSessionId", UserSession.id, { httpOnly: true });

    return UserSession;
};

export default createUserSessionResolver;