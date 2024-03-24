"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTicketForm = () => {
  const router = useRouter(); 
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };


  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]:value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("api/Tickets",{
      method:"POST",
      body: JSON.stringify({formData}),
      "content-type":"application/json"
    })

    if(!res.ok){
      throw new Error("Failed to create Ticket")
    }

    router.refresh();
    router.push("/");
  }

  return (
    <div className=" flex justify-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h3> "Create New Ticket"</h3>
       <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
         <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          className="btn max-w-xs"
          value="Create Ticket"
        />
        </form>
    </div>
  )
}

export default EditTicketForm
