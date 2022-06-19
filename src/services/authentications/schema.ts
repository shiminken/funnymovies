import * as yup from "yup";

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(6, "6 characters is minimum"),
});
