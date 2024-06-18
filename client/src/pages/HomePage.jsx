import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="flex items-center justify-center min-h-screen text-2xl">
            Ordena todas tus tareas en un solo lugar,&nbsp;
            <Link to="/register" className="text-blue-500 hover:text-blue-200">registrate ahora</Link>
            &nbsp;y comienza a ser más productivo.
        </div>
    )
}

export default HomePage