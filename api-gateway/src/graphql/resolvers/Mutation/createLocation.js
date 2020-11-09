import LocationService from "#root/adapters/LocationService";

const createlocationResolver = (obj, { description, title }, context ) => {
    if(!context.res.locals.userSession) throw new Error("Not Logged in!");
    
    return LocationService.createLocation({ description, title });

};

export default createlocationResolver;