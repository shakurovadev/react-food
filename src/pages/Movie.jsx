import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';

function Movie() {
    const { title } = useParams();
    const navigate = useNavigate();
    const value = useLocation();

    console.log(value);
    return (
        <>
            <h1>Some movie {title}</h1>
            <Outlet />
            <button className='btn' onClick={() => navigate(-1)}>
                Go back
            </button>
        </>
    );
}

export { Movie };
