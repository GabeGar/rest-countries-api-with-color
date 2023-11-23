const Loader = () => {
    return (
        // inset-0 class = top,left,bottom,right ---> 0 ---> in order to overlay the screen.
        <div className="absolute left-0 right-0 z-50 mt-12 flex items-center justify-center gap-3 bg-colorBg">
            <div className="loader"></div>
            <div className="text-xl text-colorText">Loading... </div>
        </div>
    );
};

export default Loader;
