import { Form, Formik } from 'formik';
import formJson from '../data/custom-form.json';
import { MyTextInput } from '../components/MyTextInput';
import { MySelectInput } from '../components';
import * as Yup from 'yup';

const InitialValues:  { [key: string] : any} = {};
const requiredFields:  { [key: string] : any} = {};

for (const input of formJson) {
	InitialValues[input.name] = input.value;
	if(!input.validations)continue;

	let schema = Yup.string();
	
	for (const rule of input.validations) {
		if(rule.type === "required") {
			schema = schema.required('Este campo es requerido');
		}
		if(rule.type === "min"){
			schema = schema.min((rule as any).min, `Debe ser mayor a ${(rule as any).min}`)
		}
		if(rule.type === "max"){
			schema = schema.max((rule as any).max, `Debe ser menor a ${(rule as any).max}`)
		}
		if(rule.type === "email"){
			schema = schema.email(`Debe ingresar un email valido`)
		}
	}
	requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({
	...requiredFields
})

export const DinamycForm = () => {
  return (
	<div>
		<h2>Dinamyc Form</h2>
		<Formik 
			initialValues={ InitialValues }
			validationSchema={validationSchema}
			onSubmit={ (values) => {
				console.log(values);
			}}>
			{ (formik) => (
				<Form noValidate>
					{
					formJson.map(({type, label, name, placeholder, ...props}) => {
						if(type === 'input' || type === 'password' || type === 'email'){
							return <MyTextInput 
										key={name} 
										type={type as any} 
										name={name} 
										placeholder={placeholder} 
										label={label} 
									/>
						}else if(type === 'select') {
							return (
									<MySelectInput
										key={name} 
										name={name} 
										label={label} 
									>
										<option value="">Select an option</option>
										{
											props.options?.map( option => (
												<option key={option.id} value={option.id}>{option.label}</option>
											))
										}
									</MySelectInput>
								)
						}
						// throw new Error(`Type : ${ type }, not supported`);
					})}
					<button type='submit' >Enviar</button>
				</Form>
			)}
		</Formik>
	</div>
  )
}
