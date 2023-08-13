export interface Alumni{
    id: string;
    firstName: string;
    lastName: string;
    bio: string;
    gradClass: string;
    jobTitle: string;
    companyName: string;
    industry: string;
    state: string;
    city: string;
    linkedIn: string;
    email: string;
}

export const fakeAlumniList: Alumni[] = [{
    id: "1",
    firstName: "Charles",
    lastName: "Henry",
    bio: "Hey",
    gradClass: "2020",
    jobTitle: "Web Dev",
    companyName: "PwC",
    industry: "Hey",
    state: "Alabama",
    city: "Atlanta",
    linkedIn: "mcscott8",
    email: "mcscott5@crimson.ua.edu"
}]

export enum PageEnum {
    list,
    add,
    edit,
}