export interface Location {
    latitude: number,
    longitude: number,
    address1: string,
    address2: string,
    city: string,
    postcode: string,
    phone: number,
    phonestring: string,
    openingHours: {
        monday: string,
        tuesday: string,
        wednesday: string,
        thursday: string,
        friday: string,
        saturday: string,
        sunday: string
    },
    imageUrl: string;
}