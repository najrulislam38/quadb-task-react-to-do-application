import Container from "./Container";

const Home = () => {
  return (
    <section className="mx-5 md:mx-10">
      {/* main container */}
      <Container>
        <div className=" w-full min-h-[500px] mb-10 p-5 md:p-6 border-2 border-white rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <h3 className="text-2xl">To Do Application</h3>
            {/* add Task section */}
            <div className="">
              <button className="px-4 py-1 font-medium bg-primary text-white relative overflow-hidden group z-10 duration-300 hover:bg-primary/95 rounded-sm active:scale-90">
                Add New Task
              </button>
            </div>
          </div>
          {/* tasks section */}
          {/* <Tasks /> */}
        </div>
      </Container>
    </section>
  );
};

export default Home;
