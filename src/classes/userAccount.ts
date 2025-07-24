import type { User } from '../types/user';

export class UserAccount implements User {
    readonly id: number;
    username: string;
    email: string;
    isActive?: boolean;
    role: 'admin' | 'user' | 'guest';
    private password: string;

    constructor(id: number, username: string, email: string, password: string, role: 'admin' | 'user' | 'guest' = 'user', isActive: boolean = true) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isActive = isActive;
    }

    validatePassword(): boolean {
        return this.password.length >= 8;
    }

    get Password(): string {
        return this.password;
    }
}

export class AdminUser extends UserAccount {
    permissions: string[];

    constructor(id: number, username: string, email: string, password: string, permissions: string[] = [], isActive: boolean = true) {
        super(id, username, email, password, 'admin', isActive);
        this.permissions = permissions;
    }

    override validatePassword(): boolean {
        return this.Password.length >= 12;
    }
}