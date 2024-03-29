import { useForm } from "react-hook-form";
import Modal from "./ui/Modal";
import PropTypes from "prop-types";

const AddNewTask = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} headTitle={"Create A Task"}>
        <div className="px-6 py-5">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* title field */}
            <div className="flex justify-between items-center gap-5">
              <label htmlFor="title" className="font-semibold">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                {...register("title", {
                  required: true,
                  formState: { errors },
                  maxLength: 20,
                })}
                className="rounded w-2/3 py-1 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            {errors.title && (
              <p className="text-sm text-red-500 text-right ">
                Title field is required amd most have less or equal 20 letters.
              </p>
            )}
            {/* description field */}
            <div className="flex justify-between items-center gap-5">
              <label htmlFor="description" className="font-semibold">
                Description:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                {...register("description", {
                  required: true,
                })}
                className="rounded w-2/3 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            {errors.description && (
              <p className="text-sm text-red-500 text-right md:mr-10">
                This field is required.
              </p>
            )}
            {/* team field */}
            <div className="flex justify-between items-center gap-5">
              <label htmlFor="team" className="font-semibold">
                Team:
              </label>
              <input
                type="text"
                id="team"
                name="team"
                {...register("team", {
                  required: true,
                })}
                className="rounded w-2/3 py-1 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            {errors.team && (
              <p className="text-sm text-red-500 text-right md:mr-10">
                This field is required.
              </p>
            )}
            {/* assignee field */}
            <div className="flex flex-wrap justify-between items-center gap-5">
              <label htmlFor="assignee" className="font-semibold">
                Assignee:
              </label>
              <input
                type="text"
                id="assignee"
                name="assignee"
                {...register("assignee", {
                  required: true,
                })}
                className="rounded w-2/3 py-1 focus:border-gray-500  bg-gray-200 focus:bg-white"
              />
            </div>
            {errors.assignee && (
              <p className="text-sm text-red-500 text-right md:mr-10">
                This field is required.
              </p>
            )}
            {/* priority field */}
            <div className="flex justify-between items-center gap-5 ">
              <label htmlFor="priority" className="font-semibold">
                Priority:
              </label>
              <select
                name="priority"
                id="priority"
                {...register("priority", {
                  required: true,
                })}
                className=" w-2/3 py-1 focus:border-gray-500 rounded bg-gray-200 focus:bg-white"
              >
                <option value="p0">P0</option>
                <option value="p1">P1</option>
                <option value="p2">P2</option>
              </select>
            </div>
            {errors.priority && (
              <p className="text-sm text-red-500 text-right md:mr-10">
                This field is required.
              </p>
            )}
            {/* status field */}
            {/* <div className="flex justify-between items-center gap-5 ">
              <label htmlFor="status" className="font-semibold">
                Status:
              </label>
              <select
                name="status"
                id="status"
                {...register("status", {
                  required: true,
                })}
                className=" w-2/3 py-1 focus:border-gray-500 rounded bg-gray-200 focus:bg-white"
              >
                <option value="pending">Pending</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="deploy">Deploy</option>
                <option value="deferred">Deferred</option>
              </select>
            </div>
            {errors.status && (
              <p className="text-sm text-red-500 text-right md:mr-10">
                This field is required.
              </p>
            )} */}
            <button
              type="submit"
              className="py-2 px-3 font-medium bg-primary text-white relative overflow-hidden group z-10 duration-300 hover:bg-secondary/90 rounded-sm active:scale-75 "
            >
              Add Task
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddNewTask;

AddNewTask.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
