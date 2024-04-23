import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  TextField,
  Box,
  Typography,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const validationSchema = yup.object({
  name: yup.string("Enter your full name").required("Full name is required"),
  idNumber: yup
    .number("Enter your ID number")
    .required("ID number is required")
    .typeError("ID should be only a number"),
  idProfessionalNumber: yup
    .number("Enter your Professional ID number")
    .required("Professional ID number is required")
    .typeError("Professional ID should be only a number"),
  specialty: yup
    .string("Enter your Specialty")
    .required("Specialty is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  birthday: yup.date("Enter your Birthdate").required("Birthday is required"),
});

const FormRegister = ({ submitRegister }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      idNumber: "",
      idProfessionalNumber: "",
      specialty: "",
      email: "",
      birthday: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitRegister(values);
    },
  });

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { mr: 2, mb: 2 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      textAlign={"center"}
    >
      <Typography variant="h5" mb={2}>
        Medical Registration Form
      </Typography>

      <TextField
        fullWidth
        id="name"
        name="name"
        label="Full name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        fullWidth
        id="idNumber"
        name="idNumber"
        label="ID number"
        value={formik.values.idNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.idNumber && Boolean(formik.errors.idNumber)}
        helperText={formik.touched.idNumber && formik.errors.idNumber}
      />

      <TextField
        fullWidth
        id="idProfessionalNumber"
        name="idProfessionalNumber"
        label="Professional ID number"
        value={formik.values.idProfessionalNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.idProfessionalNumber &&
          Boolean(formik.errors.idProfessionalNumber)
        }
        helperText={
          formik.touched.idProfessionalNumber &&
          formik.errors.idProfessionalNumber
        }
      />

      <TextField
        fullWidth
        id="specialty"
        name="specialty"
        label="Specialty"
        value={formik.values.specialty}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.specialty && Boolean(formik.errors.specialty)}
        helperText={formik.touched.specialty && formik.errors.specialty}
        select
      >
        <MenuItem value="Doctor">Doctor</MenuItem>
        <MenuItem value="Nurse">Nurse</MenuItem>
        <MenuItem value="Pediatrics">Pediatrics</MenuItem>
        <MenuItem value="Cardiology">Cardiology</MenuItem>
        <MenuItem value="Dermatology">Dermatology</MenuItem>
        <MenuItem value="Neurology">Neurology</MenuItem>
        <MenuItem value="Ophthalmology">Ophthalmology</MenuItem>
        <MenuItem value="Psychiatry">Psychiatry</MenuItem>
      </TextField>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <DatePicker
        onChange={(value) => formik.setFieldValue("birthday", value, true)}
        value={formik.values.birthday}
        label="Birthday"
        renderInput={(params) => (
          <TextField
            id="birthday"
            name="birthday"
            label="Birthday"
            error={formik.touched.birthday && Boolean(formik.errors.birthday)}
            helperText={formik.touched.birthday && formik.errors.birthday}
            onBlur={formik.handleBlur}
            {...params}
          />
        )}
        format="DD/MM/YYYY"
        slotProps={{
          textField: {
            fullWidth: true,
            error: formik.touched.birthday && Boolean(formik.errors.birthday),
            helperText: formik.touched.birthday && formik.errors.birthday,
          },
        }}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default FormRegister;
