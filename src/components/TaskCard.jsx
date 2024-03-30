import { TrashIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-gray-100 rounded-md p-4 m-3">
      <div className="flex flex-row justify-between items-center border-b border-black pb-2 ">
        <h1 className={`text-lg font-semibold  }`}>
          {task?.title.length > 40 ? task?.title.slice(0, 40) : task?.title}
        </h1>
        <span className="bg-primary text-xs py-0.5 px-1 font-semibold text-white rounded">
          {task?.priority}
        </span>
      </div>
      <p className="mb-2 text-sm pt-2 text-gray-800">{task?.description}</p>
      <h3 className="font-semibold italic">
        {task?.assignee && `@${task?.assignee}`}
      </h3>
      <div className="flex justify-between items-center relative my-1">
        <p className="text-sm font-medium">Date: {task?.date}</p>
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
