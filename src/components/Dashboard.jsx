import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkTokenCookie = () => {
            const tokenCookie = document.cookie.split('; ').find(row => row.startsWith('token='));
            console.log(tokenCookie, 'tokenCookie');
            console.log(document.cookie, 'document.cookie')
            if (!tokenCookie) {
                navigate('/');
            }
        };

        checkTokenCookie();
    }, []);

    const logout = async () => {
        try {
            const response = await fetch('https://api.favinsta.com/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }
            else {
                navigate('/');
            }


        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <div>Dashboard</div>
            <button className='bg-sky-200 rounded px-3 py-1' onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;