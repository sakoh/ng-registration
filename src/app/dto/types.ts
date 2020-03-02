export interface RegistrationData {
    basicInfo: BasicInfo,
    billingAddress: Address,
    shippingAddress: Address
}

interface BasicInfo {
    firstName: string,
    lastName: string,
    email: string,
    birthDate: Date
}

interface Address {
    street: string,
    city: string,
    state: string,
    zipCode: string
}