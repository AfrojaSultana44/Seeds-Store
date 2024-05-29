import * as yup from "yup"

export const createContactSchema = yup.object({
    name: yup.string().required("Title is required"),
    email: yup.string().required("Email is required"),
    phone: yup.number().required("Phone Number is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });
