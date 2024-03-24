"use client";

const DeleteBlock = ({ id }) => {

    const deleteTicket = () => { }
  return (
    <>
    <div className="text-red-400 hover:cursor-pointer hover:text-red-200" onClick={deleteTicket}>Delete</div>
    </>
  );
};

export default DeleteBlock;