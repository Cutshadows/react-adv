import {
  	BrowserRouter,
  	Routes,
  	Route,
	Link,
} from 'react-router-dom';
import { RegisterPage } from '../03-forms/pages/Register.page';
import logo from '../logo.svg';


import { 
	FormikPages,
	FormikYupPages,
	FormikComponents,
	FormikAbstract,
	RegisterFormikPage,
	DinamycForm 
} from '../03-forms/pages';


export const Navigation = () => {
	// useEffect(() => {
	// 	console.log(window.location.pathname)
	// }, [window.location.pathname])
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
			<li>
				<Link to="/" className="nav-active" >Home</Link>
			</li>
            <li>
              <Link to="/about" className="nav-active" >About</Link>
            </li>
            <li>
              <Link to="/users" className="nav-active" >Users</Link>
            </li>
			<li>
              <Link to="/register" className="nav-active" >Register Page</Link>
            </li>
			<li>
              <Link to="/formik-basic" className="nav-active" >Formik Basic</Link>
            </li>
			<li>
              <Link to="/formik-yup" className="nav-active" >Formik Yup Pages</Link>
            </li>
			<li>
              <Link to="/formik-components" className="nav-active" >Formik Components</Link>
            </li>
			<li>
              <Link to="/formik-abstract" className="nav-active" >Formik Abstract</Link>
            </li>
			<li>
              <Link to="/register-formik" className="nav-active" >Register Formik Page</Link>
            </li>
			<li>
              <Link to="/dinamyc-form" className="nav-active" >Dinamyc Form</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
			<Route path="/dinamyc-form" element={<DinamycForm />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/register-formik" element={<RegisterFormikPage />} />
			<Route path="/formik-basic" element={<FormikPages />} />
			<Route path="/formik-yup" element={<FormikYupPages />} />
			<Route path="/formik-components" element={<FormikComponents />} />
			<Route path="/formik-abstract" element={<FormikAbstract />} />
			<Route path="/about" element={<h1>About</h1>} />
			<Route path="/users" element={<h1>Users</h1>} />
			<Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}