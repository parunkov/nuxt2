const useAuth = () => useState('isAuth', () => false);
const useUsers = () => useState('users', () => ([
    {login: 'admin', password: 'password'}
]) )

export { useAuth, useUsers };
