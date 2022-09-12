import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput, MySelectInput, MyCheckboxInput } from '../components';



interface FormValues {
	firstName: string,
	lastName: string,
	email: string
}


export const FormikAbstract = () => {

  return (
	<div>
		<h1>Formik Abstract Tutorial</h1>

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
				({handleSubmit}) => (
					<Form onSubmit={handleSubmit}>
						<MyTextInput 
							name="firstName" 
							label="First Name" 
							type='text'
							placeholder='Pedro' 
						/>
						<MyTextInput 
							name="lastName" 
							label="Last Name" 
							type='text'
							placeholder='Austuruaga' 
						/>
						<MyTextInput 
							name="email" 
							label="Email User" 
							type="email"
							placeholder='email@test.cl' 
						/>
						
						<MySelectInput name="jobType" label="Job Type" >
							<option value="">Pick Something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">it Senior</option>
							<option value="it-jr">it Junior</option>
						</MySelectInput>
						<MyCheckboxInput  name="terms" label="Terms & conditions" />
						<button type="submit">Submit</button>
					</Form>
				)
		}
		</Formik>

		
	</div>
  )
}
