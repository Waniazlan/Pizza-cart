import { UserContext } from "../UserContext";
import { Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from "axios";

export default function ProfilePage() {
    const { user, setUser, ready } = useContext(UserContext);
    const [redirect, setRedirect] = useState(null);

    if (!ready) {
        return <div className="text-center">Loading...</div>;
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />;
    }

    if (redirect) {
        return <Navigate to={redirect} />;
    }

    async function handleClickLogOut() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-5">Welcome, {user && user.name}!</h1>

            <div className="flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
                    <div className="text-center mb-8">
                        <img src="/profile-picture.jpg" alt="Profile" className="mx-auto w-32 h-32 rounded-full" />
                    </div>

                    <div className="text-center mb-4">
                        <h2 className="text-xl font-semibold">{user && user.name}</h2>
                        <p className="text-gray-600 text-sm">{user && user.email}</p>
                    </div>

                    <button onClick={handleClickLogOut} className="block w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded">Log Out</button>
                </div>
            </div>
        </div>
    );
}
