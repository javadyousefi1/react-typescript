interface HeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: HeaderProps) => {
  return (
    <header>
      <h1 className="text-primary text-2xl text-center font-bold">{title}</h1>
      <h3 className="text-secondary text-md text-center font-bold">
        {description}
      </h3>
    </header>
  );
};

export default Header;
