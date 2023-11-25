interface Props {
    message: string;
}

const Error = ({ message }: Props) => {
    return (
        <p className="mt-4 flex justify-center text-2xl font-semibold text-colorText">
            {message}
        </p>
    );
};

export default Error;
