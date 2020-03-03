export interface RegistrationData {
    basicInfo: BasicInfo,
    address: Address
}

interface BasicInfo {
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string
}

interface Address {
    street: string,
    city: string,
    state: string,
    zipCode: string
}