import { Title } from "../index";
import { Map } from "../index";

const Modal = () => {
  return (
    <>
      <Title />
      <Map />
      <form>
        <textarea
          placeholder="Description"
          className="w-full h-32 px-2 py-1 mr-3 text-lg"
        ></textarea>
        <input
          className="w-full px-2 py-1 mr-3 text-lg "
          type="text"
          placeholder="Email"
        />
        <label htmlFor="myfile">Browse: </label>
        <input
          type="file"
          id="myfile"
          name="myfile "
          className="py-1 text-lg "
          accept="image/*"
        />

        <div className="container flex flex-col items-center min-w-full px-10 ">
          <button className="px-4 py-2 text-gray-700 bg-transparent border border-gray-500 rounded w-50 hover:bg-gray-500 hover:text-white hover:border-transparent">
            Submit
          </button>{" "}
        </div>
      </form>
    </>
  );
};

export default Modal;
