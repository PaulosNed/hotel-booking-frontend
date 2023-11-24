export interface Room {
    id: Number,
    name: string,
    cover_photo: string,
    description: string,
    service_provided: string[],
    capacity: Number,
    bedNumber: Number,
    status: Boolean,
    price: Number,
    photos: string[],
}