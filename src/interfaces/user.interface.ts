export interface IAddress {
    street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
}

export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface IUser {
    // name: string;
    // surname: string;
    // age: number | undefined | null; // this was commented
    // age?: number
// above was old one that we commented

    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany
}