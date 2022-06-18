import * as yup from "yup";

const youtubeUrlRex =/^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/

export const youtubeSchema = yup.object().shape({
  youtubeUrl: yup
    .string()
    .matches(youtubeUrlRex, 'Please enter valid youtube url')
    .required("This field is required"),

});
