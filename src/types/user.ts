// src/types/user.ts
export interface User {
    readonly id: number;
    username: string; 
    email: string;
    isActive?: boolean;
    role: 'admin' | 'user' | 'guest';

}

export type UserProfile = User & {
    birthDate: Date;
    address?: string;
};