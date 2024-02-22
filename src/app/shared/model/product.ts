export interface Iproduct {
    pname: string,
    pdetails: string,
    pstatus: string,
    id: string
};


export enum ProductStatus {
    InProgress = "In Progress",
    Dispatched = "Dispatched",
    Delivered = "Delivered"
}