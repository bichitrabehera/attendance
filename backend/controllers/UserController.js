import { registerUser, loginUser } from '../models/UserModel';

export const register = async (req, res) => {
    const { email, usn, password } = req.body;
    try {
        const newUser = await registerUser(email, usn, password);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginUser(email, password);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error });
    }
};
