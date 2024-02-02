import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    age: z
      .number({ invalid_type_error: "Age field required" })
      .min(18, { message: "must be older than 18" }),
  });

  type FormData = z.infer<typeof schema>;


const Form = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({resolver: zodResolver(schema)});


 const submit =(data : FieldValues) => {
console.log(data);

 }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name: </label>
        <input {...register("name")} id="name" type="text" className="form-input" />

{errors.name && <p className="text-danger">{errors.name.message}</p>}

      </div>


      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age: </label>
        <input {...register("age", {valueAsNumber: true})} id="age" type="text" className="form-input" />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}

      </div>


      <button disabled ={!isValid} className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
