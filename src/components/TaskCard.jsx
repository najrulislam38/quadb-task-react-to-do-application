import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import PropTypes from "prop-types";

const TaskCard = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // console.log(task);
  const task = {
    id: 1,
    status: "pending",
    title: "Task",
    description:
      "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
    date: "2023-08-28",
    assignee: "Najrul Islam",
    priority: "P0",
  };

  return (
    <div className="bg-gray-100 rounded-md p-4 m-3">
      <div className="flex flex-row justify-between items-center border-b border-black pb-2 ">
        <h1 className={`text-lg font-semibold  }`}>{task?.title}</h1>
        <button className="bg-primary text-xs p-0.5 font-semibold text-white rounded">
          {task.priority}
        </button>
      </div>
      <p className="mb-3 text-sm pt-2 text-gray-800">{task?.description}</p>
      <div className="flex justify-between items-center relative">
        <h3 className="font-semibold italic">
          {task?.assignee && `@${task?.assignee}`}
        </h3>

        <button className="border bg-transparent  duration-300 p-0.5 rounded ml-3">
          <TrashIcon className="w-6 h-6 text-red-500 " />
        </button>
      </div>
      <button className="px-3 py-1 mt-3 font-medium text-sm bg-primary text-white  duration-300 hover:bg-secondary/90 rounded-sm active:scale-90">
        Change To Complete
      </button>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;
