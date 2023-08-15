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



export enum PageEnum {
    list,
    add,
    edit,
}