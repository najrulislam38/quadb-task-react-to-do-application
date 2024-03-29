import { useState } from "react";
import Container from "./Container";
import TaskList from "./TaskList";
import AddNewTask from "./AddNewTask";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="mx-5 md:mx-10">
      {/* main container */}
      <Container>
        <div className=" w-full min-h-[500px] mb-10 p-5 md:p-6 border-2 border-white rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <h3 className="text-2xl">To Do Application</h3>
            {/* add Task section */}
            <div className="">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-1 font-medium bg-primary text-white relative overflow-hidden group z-10 duration-300 hover:bg-secondary/90 rounded-sm active:scale-90"
              >
                Add New Task
              </button>
              <AddNewTask isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
          {/* tasks section */}
          <TaskList />
        </div>
      </Container>
    </section>
  );
};

export default Home;
