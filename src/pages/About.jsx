import SplitButton from "../Components/Button";

const About = () => {
  return (
    <div>
      <div className="flex flex-col w-full h-screen px-4 py-8 bg-gray-100 ">
        <div className="flex items-center">
          <img
            className="object-cover w-16 h-16 mx-2 rounded-full"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <div className="flex flex-col">
            <h4 className="mx-2 text-3xl font-bold">Hi Mike</h4>
            <p className="mx-2 mt-1 text-sm font-medium">Welcome Back</p>
          </div>
        </div>
        <div className="m-5">
          <div className="flex flex-col mt-6 gap-2">
            <h4 className="text-xl font-bold">Today</h4>
            <h2 className="text-3xl font-bold">$19,892</h2>
            <p>Account Balance</p>
           
          </div>
          <div className="flex flex-col mt-4 gap-2">
          <h4 className="text-xl font-bold">$4,000</h4>
          <p>Year-to-Date-Contributions</p>
          </div>
          <div className="flex flex-col mt-4 gap-2">
          <h4 className="text-xl font-bold">$1,892</h4>
          <p>Total Interest</p>
          </div>
          <div className="mt-5">
          <SplitButton></SplitButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
