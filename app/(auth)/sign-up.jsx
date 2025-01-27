
import { useState } from 'react'
import FormAuth from '../../components/formAuth/FormAuth'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {

  const [form, setForm] = useState({
    username:'',
    email:'',
    password:''
  })
  const formFieldConfig = [
    {
      title : 'Username',
      value: 'username',
      form: form.username
    },
    {
      title : 'Email',
      value: 'email',
      form: form.email
    },
    {
      title : 'Password',
      value: 'password',
      form: form.password
    },
  ]

  const pageAuthDetail ={
    titlePage:'Sign up to Aora',
    boxLinkText:"Have an account already?",
    link:'Login',
    titleButton:'Sign up',
    linkHref : '/sign-in'
  }

  const handleChangeText = (e, value) =>{
    setForm({...form, [value]: e})
  }

  const submit =() =>{
    createUser()
  }
  return (
    <FormAuth 
      pageAuthDetail={pageAuthDetail}
      formFieldConfig={formFieldConfig }
      handleChangeText={handleChangeText}
      submit={submit}
    />
  )
}

export default SignUp





