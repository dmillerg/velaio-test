import { PEOPLE } from "./people.model";

export interface TASK {
    id?: number;
    title: string;
    expirationDate: Date;
    people?: PEOPLE[];
    completed: boolean;
}