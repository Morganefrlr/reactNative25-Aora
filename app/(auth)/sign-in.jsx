
import { useState } from 'react'
import FormAuth from '../../components/formAuth/FormAuth'

const SignIn = () => {
  
  const [form, setForm] = useState({
    email:'',
    password:''
  })
  
  const formFieldConfig = [
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
    titlePage:'Log in to Aora',
    boxLinkText:"Don't have an account?",
    link:'Signup',
    titleButton:'Login',
    linkHref : '/sign-up'
  }

  const handleChangeText = (e, value) =>{
    setForm({...form, [value]: e})
  }
  const submit =() =>{

  }


  return (
    <FormAuth 
      pageAuthDetail={pageAuthDetail}
      formFieldConfig={formFieldConfig }
      handleChangeText={handleChangeText}
    />
  )
}

export default SignIn

