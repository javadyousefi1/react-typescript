import Input from "../components/Input";

const HomePage = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen bg-secondary">
      <div className="w-[400px] rounded-lg bg-primary px-4 py-6">
        <h1 className="mb-10 text-3xl text-center text-main_white">React + Typescript</h1>
        <Input id="name" label="Your Name" type="text"/>
        <Input id="age" label="Your Age" type="number"/>
        <button className="w-full p-3 mt-6 transition-all duration-150 ease-in-out rounded-lg bg-secondary text-main_white hover:bg-light_primary hover:text-primary">submit</button>
      </div>
    </section>
  );
};

export default HomePage;
