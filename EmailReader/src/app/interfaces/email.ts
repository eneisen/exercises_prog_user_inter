// import { Address } from './Email';

// export interface Student {
//     id: number;
//     name: string;
//     email: string; 
//     address?: Address;
// }


export interface Email {
    from: string;
    to: string;
    subject: string; 
    body: string;
}