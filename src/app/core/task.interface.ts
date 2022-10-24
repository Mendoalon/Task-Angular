import { AuthorInteface } from "./author.interface";

export interface TaskInteface  {
    title: string;
    description: string;
    author: AuthorInteface;   
}