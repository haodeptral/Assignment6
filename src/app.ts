import { UserAccount, AdminUser } from './classes/userAccount.js';
import { createUser, formatUserInfo } from './utils/functions.js';
import type { User, UserProfile } from './types/user.js';


const form = document.getElementById("userForm") as HTMLFormElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const roleSelect = document.getElementById("role") as HTMLSelectElement;
const userListDiv = document.getElementById("userList") as HTMLDivElement;

const createdUsers: (UserAccount | AdminUser)[] = [];

form.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const role = roleSelect.value as 'admin' | 'user' | 'guest';

    let newUserInstance: UserAccount | AdminUser;

    if (role === 'admin') {
        newUserInstance = new AdminUser(Date.now(), username, email, password, ['manage_users', 'view_reports']);
        if (!newUserInstance.validatePassword()) {
            alert('Admin password must be at least 12 characters!');
            return;
        }
    } else {
        newUserInstance = new UserAccount(Date.now(), username, email, password, role);
        if (!newUserInstance.validatePassword()) {
            alert('User password must be at least 8 characters!');
            return;
        }
    }

    createdUsers.push(newUserInstance);

    console.log("Created User Object:", newUserInstance);
    console.log("Formatted User Info:", formatUserInfo(newUserInstance));

    const userDiv = document.createElement('div');
    userDiv.innerHTML = `
        <p><strong>ID:</strong> ${newUserInstance.id}</p>
        <p><strong>Username:</strong> ${newUserInstance.username}</p>
        <p><strong>Email:</strong> ${newUserInstance.email}</p>
        <p><strong>Role:</strong> ${newUserInstance.role}</p>
        <p><strong>Active:</strong> ${newUserInstance.isActive ? 'Yes' : 'No'}</p>
        <p><strong>Password Validated:</strong> ${newUserInstance.validatePassword() ? 'Yes' : 'No'}</p>
        ${newUserInstance instanceof AdminUser ? `<p><strong>Permissions:</strong> ${newUserInstance.permissions.join(', ')}</p>` : ''}
        <p><strong>Formatted Info:</strong> ${formatUserInfo(newUserInstance)}</p>
        <hr/>
    `;
    userListDiv.appendChild(userDiv);

    form.reset();
};