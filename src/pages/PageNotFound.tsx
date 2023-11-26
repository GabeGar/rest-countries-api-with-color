import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';

const PageNotFound = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            } else {
                navigate('/');
            }
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [countdown, navigate]);

    const handleBackToSafety = () => {
        navigate('/');
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-colorBg px-3">
            <div className="max-w-lg rounded-lg bg-colorElement p-8 text-colorText shadow-md">
                <h1 className="mb-3 flex flex-col items-center text-3xl font-bold">
                    <p>🚧 404 🚧</p>
                    <p>Page Not Found</p>
                </h1>
                <p className="mt-2 text-center">
                    Redirecting in{' '}
                    <span className="font-bold">{countdown}</span> seconds...
                </p>
                <p className="mt-4 flex justify-center text-center ">
                    <button
                        onClick={handleBackToSafety}
                        className="flex items-center gap-2 font-semibold"
                    >
                        <span>
                            <BsArrowReturnLeft />
                        </span>{' '}
                        <span>Go Back</span>
                    </button>
                </p>
            </div>
        </div>
    );
};

export default PageNotFound;
