export interface Alumni{
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    location: string;
}

export const fakeAlumniList: Alumni[] = [{
    id: "1",
    firstName: "Charles",
    lastName: "Henry",
    companyName: "PwC",
    location: "Atlanta"
},
{
    id: "2",
    firstName: "Jane",
    lastName: "Doe",
    companyName: "Crowe LLP",
    location: "Chicago"
},
{
    id: "3",
    firstName: "John",
    lastName: "Smith",
    companyName: "Sysco",
    location: "NYC"
}]