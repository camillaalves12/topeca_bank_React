import { useState } from 'react'
import './login.css'
import * as yup from 'yup'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default function Login() {
  const handleLogin = values => {
    Axios.post('http://localhost:3001/loginEx', {
      email: values.email,
      password: values.password
    }).then(response => {
      alert(response.data.msg)
    })
  }

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email('email inválido')
      .required('O email é obrigatório'),
    password: yup
      .string()
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .required('A senha é obrigatória')
  })

  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email('email inválido')
      .required('O email é obrigatório'),
    password: yup
      .string()
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .required('A senha é obrigatória'),
    confirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'As senhas são diferentes')
      .required('A confirmação da senha é obrigatória')
  })

  return (
    <>
      <body className="bodyLogin">
        <div className="containerLogin">
          <div className="titleLogin">
            <Link to="/">
              <p className="titleLogin">
                <p>TopekaBank</p>
              </p>
            </Link>
          </div>

          <div className="login">
            <Formik
              initialValues={{}}
              onSubmit={handleLogin}
              validationSchema={validationsLogin}
            >
              <Form className="loginForm">
                <div className="login-form-group">
                  <Field
                    name="email"
                    className="inputsLogin"
                    type="text"
                    placeholder="Usuário"
                  />

                  <ErrorMessage
                    component="span"
                    name="email"
                    className="form-error"
                  />
                </div>
                {/*Outro campo*/}
                <div className="form-group">
                  <Field
                    name="password"
                    className="inputsLogin"
                    type="password"
                    placeholder="Senha"
                  />

                  <ErrorMessage
                    component="span"
                    name="password"
                    className="form-error"
                  />
                </div>

                <button className="btnEntrar" type="submit">
                  Entrar
                </button>
              </Form>
            </Formik>

            <Link to="../account">
              <p className="message">
                Ainda não tem conta?{' '}
                <span className="messageP">Crie aqui!</span>
              </p>
            </Link>
          </div>
        </div>
      </body>
    </>
  )
}
