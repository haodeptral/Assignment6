import type { User, UserProfile } from '../types/user'; 

export function createUser(userData: Partial<User>): User {
    const defaultUser: User = {
        id: Date.now(),
        username: '',
        email: '',
        isActive: true,
        role: 'user',
    } as User;

    return { ...defaultUser, ...userData };
}

export function formatUserInfo(user: User | UserProfile): string {
    if ('birthDate' in user) {
        return `User ${user.username} born on ${user.birthDate.toLocaleDateString()}`;
    } else {
        return `User ${user.username} (${user.role})`;
    }
}