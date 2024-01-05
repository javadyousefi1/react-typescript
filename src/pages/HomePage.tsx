import Input from "../components/Input";

const HomePage = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen bg-secondary">
      <div className="w-[400px] rounded-lg bg-primary px-4 py-8">
        <h1 className="mb-10 text-3xl text-center text-main_white">React + Typescript</h1>
        <Input id="name" label="Your Name" />
      </div>
    </section>
  );
};

export default HomePage;
