const About = () => {
    return (
      <div>
        <div className="flex flex-col w-64 h-screen px-4 py-8 bg-gray-100 "> 
          <div className="flex  items-center">
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <div className="flex flex-col">
            <h4 className="mx-2 text-2xl font-bold">
              Hi Mike
            </h4>
            <p className="mx-2 mt-1 text-sm font-medium">
              Welcome Back
            </p>
            </div>
          </div> 
        </div>
      </div>
    );
  };
  
  export default About;
  