import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import {Formik,Form,Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import Model from '../components/Model';
const Register = () => {
  const initialValues = {
    fullName:'',
    email: '',
    password: '',
    phone:'',
    employer:false,
  }
  const validationSchema = Yup.object({
    fullName:Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string().min(6,'Password must be at least 6 characters').required('Required!'),
    phone:Yup.string().required('Required!'),
    employer:Yup.boolean()
  })
const onSubmit = (values) => {
  console.log(values)
}

  return (
    <Model>
    <div className="bg-white p-4 rounded flex justify-center items-center flex-col" >
      <Typography variant="h2" className="text-mainColor mb-8">
        Sign Up
      </Typography>
         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className="flex flex-col gap-4">
                 <div className="group flex flex-col justify-center ">
              <Field name="fullName" type="text" placeholder="Full Name" className="border-2 border-gray-300 p-2 rounded" />
              <ErrorMessage name="fullName" />
              </div>
              <div className="group flex justify-center">
              <Field name="email" type="email" placeholder="Email" className="border-2 border-gray-300 p-2 rounded" />
              <ErrorMessage name="email" />
              </div>
              <div className="group flex justify-center">
              <Field name="password" type="password" placeholder="Password" className="border-2 border-gray-300 p-2 rounded" />
              <ErrorMessage name="password" />
              </div>
               
                  <div className="group flex justify-center">
              <Field name="phone" type="text" placeholder="Phone" className="border-2 border-gray-300 p-2 rounded" />
              <ErrorMessage name="phone" />
              </div>
              <div className="group flex justify-center">
             
              <Field name="employer" type="checkbox" className="border-2 border-gray-300 p-2 rounded" />
               <label htmlFor="employer">Employer</label>
              <ErrorMessage name="employer" />
              </div>
              <Button color="lightBlue" type="submit" ripple="light">
                Sign Up
              </Button>
              <Typography color="blueGray" className="text-center">
                Already have an account? <Link to="/login" className="text-mainColor">Sign In</Link>
              </Typography>
            </Form>
         </Formik>
    </div>
    </Model>
  );
};

export default Register;
