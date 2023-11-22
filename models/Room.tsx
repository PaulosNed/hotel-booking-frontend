export interface Room {
    id: Number,
    name: string,
    photo: string,
    description: string,
    service_provided: string[],
    capacity: Number,
    bedNumber: Number,
    status: Boolean,
    price: Number,
}