import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Login from '../Login/Login';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation='border' variant='danger' />
    }
    if (!user?.uid) {
        return <Login />
    }    
    return children
};

export default PrivateRoute;