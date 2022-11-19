export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    username: string;
    role: string;
}

export const initialState: User = {
    id: '',
    name: '',
    email: '',
    avatar: '',
    username: '', 
    role: ''
}