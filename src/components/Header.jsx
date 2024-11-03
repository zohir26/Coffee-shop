

const Header = ({title, subtitle}) => {
    return (
        <div className="py-5">
            <h1 className="text-6xl mb-5">{title}</h1>
            <h3 className="text-4xl">{subtitle}</h3>
        </div>
    );
};

export default Header;