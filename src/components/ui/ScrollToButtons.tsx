import { IoArrowUpOutline } from 'react-icons/io5';
import { IoArrowDownOutline } from 'react-icons/io5';

const ScrollToButtons = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed bottom-20 right-4 flex flex-col items-end space-y-2">
            <button
                onClick={scrollToTop}
                className="rounded-full bg-colorText p-3 text-colorElement transition-all hover:bg-colorElement hover:text-colorText"
            >
                <IoArrowUpOutline />
            </button>
            <button
                onClick={scrollToBottom}
                className="rounded-full bg-colorText p-3 text-colorElement transition-all hover:bg-colorElement hover:text-colorText"
            >
                <IoArrowDownOutline />
            </button>
        </div>
    );
};

export default ScrollToButtons;
