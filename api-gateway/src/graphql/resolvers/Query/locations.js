import locationService from "#root/adapters/locationService";

const locationResolver = async () => { 
    return await locationService.fetchAllLocations();
};

export default locationResolver;