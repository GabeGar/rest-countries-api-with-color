import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => {
                navigate(-1);
            }}
            className="mb-16 mt-6 flex max-w-min items-center gap-3 self-start rounded-sm bg-colorElement px-7 py-2 text-colorText drop-shadow-lg"
        >
            <span>
                <HiOutlineArrowLeft />
            </span>
            <span>Back</span>
        </button>
    );
};

export default BackButton;
