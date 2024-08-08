import exp from "constants";
import { z } from "zod";

const contactSchema = z.object({
  firstname: z
    .string({ required_error: "Firstname is Required!" })
    .min(3, { message: "FirstName must be at least 3 characters long" })
    .max(15, { message: "FirstName must be at most 20 characters long" })
    .trim()
    .toLowerCase(),
  lastname: z.optional(z.string()),
  email: z.string({required_error: "Email is Required!"})
  .email({message: "Invalid Email!"})
  .max(30,{message: "Email can't be more than 30 characters!"})
  .trim(),
  message : z.string({required_error: "Message is Required!"})
  .min(5, {message: "Message must be at least 5 characters long!"})
  .max(50, {message: "Message can'be more than 50 characters long!"})
  .trim()
  .toLowerCase()

});

export default contactSchema;
