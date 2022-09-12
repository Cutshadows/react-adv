import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Page</h1>
			<Formik
				initialValues={{
						name: '',
						password1: '',
						password2: '',
						email: '',
				}}
				onSubmit={ ( values )=> {
					console.log(values)
				}}
				validationSchema={Yup.object({
					name: Yup.string()
							 .min(2, 'El valor minimo es 2 caracteres')
							 .max(15, 'El valor maximo es 15 caracteres')
							 .required('Valor requerido'),
						email: Yup.string()
									  .email('Revise el formato de correo')
									  .required('Email es requerido'),
						password1: Yup.string()
									  .min(6, 'Mínimo 6 caracteres')
									  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
								 	  .required('Requerido'),
						password2: Yup.string()
									  .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
						   			  .required('Requerido'),
				})}
				>
					{
						({handleSubmit, handleReset})=> (
							<Form onSubmit={handleSubmit}>
								<MyTextInput label="Name" name="name" />
								<MyTextInput label="Email" name="email" type="email" />
								<MyTextInput label="Password" name="password1" type="password" placeholder="*********" />
								<MyTextInput label="Confirm Password" name="password2" type="password" placeholder="*********" />
								<button type="submit">Create</button>
								<button type="button" onClick={ handleReset }>Reset Form</button>
							</Form>
						)
					}

				</Formik>
		</div>
	);
};
