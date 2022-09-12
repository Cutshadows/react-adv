import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';


interface FormValues {
	firstName: string,
	lastName: string,
	email: string
}


export const FormikComponents = () => {

  return (
	<div>
		<h1>Formik Components Tutorial</h1>

		<Formik initialValues={{
			firstName: '',
			lastName: '',
			email: '',
			terms: false,
			jobType: '',
		}} 
		onSubmit={ ( values: FormValues ) => {
			console.log(values)
		}}
		validationSchema = {
			Yup.object({
				firstName: Yup.string()
							.max(15, 'Debe de tener 15 caracteres o menos')
							.required('primer nombre requerido'),
				lastName: Yup.string()
							.max(10, 'Debe de tener 10 caracteres o menos')
							.required(),
				email: Yup.string()
								.email('Invalid email address')
								.required(),
				terms: Yup.boolean()
							.oneOf([true], 'Debe aceptar las condiciones'),
				jobType: Yup.string()
							.notOneOf([ '' ], 'Esta opción no es permitida.')
							.required('Requerido')
			})
		} > 
		{
				({errors, touched, handleSubmit}) => (
					<Form onSubmit={handleSubmit}>
						<label htmlFor='firstName'>First Name</label>
						<Field name="firstName" type="text" />
						{(errors.firstName && touched.firstName) && <span >{errors.firstName}</span>} 
						<label htmlFor='lastName'>Last Name</label>
						<Field name="lastName" type="text" />
						{(errors.lastName && touched.lastName) && <span >{errors.lastName}</span>} 
						<label htmlFor='email'> Email Address </label>
						<Field name="email" type="text" />
						{(errors.email && touched.email) && <span >{errors.email}</span>} 
						
						<label htmlFor='jobType'>Job Type</label>
						<Field name="jobType" as="select" >
							<option value="">Pick Something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">it Senior</option>
							<option value="it-jr">it Junior</option>
						</Field>
						{(errors.jobType && touched.jobType) && <span >{errors.jobType}</span>} 
						<label > 
						<Field name="terms" type="checkbox" />
							Terms and conditions
						</label>
						{(errors.terms && touched.terms) && <span >{errors.terms}</span>} 
						<button type="submit">Submit</button>
					</Form>
				)
		}
		</Formik>

		
	</div>
  )
}
