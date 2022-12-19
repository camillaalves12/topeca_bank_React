import { useState } from 'react'
import './account.css'
import * as yup from 'yup'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import Axios from 'axios'
import { Link } from 'react-router-dom'
export default function Acconunt() {
  const handleRegister = values => {
    Axios.post('http://localhost:3001/register', {
      cpf: values.cpf,
      email: values.email,
      nome: values.nome,
      password: values.password
    }).then(response => {
      alert(response.data.msg)
      console.log(response)
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
    nome: yup.string().required('O nome é obrigatório'),
    cpf: yup
      .string()
      .min(11, 'O CPF deve ter pelo menos 11 caracteres')
      .required('O CPF é obrigatório'),
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
      .required('A senha é obrigatória')
  })

  return (
    <>
      <section class="titleTopeka">
        <Link to="/">
          <h1>
            <p href="/index.html" class="titleContaTopeka">
              TopekaBank
            </p>
          </h1>
        </Link>
      </section>
      <section className="bodyConta">
        <div className="containerCriarConta">
          <div className="criarConta">
            <p className="titleConta">
              Complete os campos ao lado para criar sua Conta e Cartão de
              crédito
            </p>

            <div className="criarContaForm">
              <Formik
                initialValues={{}}
                onSubmit={handleRegister}
                validationSchema={validationsRegister}
              >
                <Form className="formCriarConta">
                  <div className="register-form-group">
                    <Field
                      name="cpf"
                      className="inputsConta"
                      placeholder="CPF"
                    />

                    <ErrorMessage
                      component="span"
                      name="cpf"
                      className="form-error"
                    />
                  </div>

                  <div className="register-form-group">
                    <Field
                      name="email"
                      className="inputsConta"
                      placeholder="Email"
                    />

                    <ErrorMessage
                      component="span"
                      name="email"
                      className="form-error"
                    />
                  </div>

                  <div className="register-form-group">
                    <Field
                      name="nome"
                      className="inputsConta"
                      placeholder="Nome"
                    />

                    <ErrorMessage
                      component="span"
                      name="nome"
                      className="form-error"
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      name="password"
                      className="inputsConta"
                      placeholder="Senha"
                    />

                    <ErrorMessage
                      component="span"
                      name="password"
                      className="form-error"
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      name="confirmation"
                      className="inputsConta"
                      placeholder="Confirme a senha"
                    />

                    <ErrorMessage
                      component="span"
                      name="confirmation"
                      className="form-error"
                    />
                  </div>

                  <div className="checkLabel">
                    <input type="checkbox" id="termos" name="termos" required />
                    <label className="labelText" for="termos">
                      Eu li, estou ciente das condições de tratamento dos meus
                      dados pessoais e dou meu consentimento, quando aplicável,
                      conforme descrito nesta{' '}
                      <strong className="boldText">
                        Política de Privacidade.
                      </strong>
                    </label>
                  </div>

                  <button className="btnEnviar" type="submit">
                    Cadastrar
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
