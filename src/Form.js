import React,{useState,useEffect} from 'react'
import axios from 'axios'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess.js'
import './form.css'

const Form = () => {
  const [data,setData]=useState ([])
  useEffect(() => {
    axios
      .get(
        "https://fakerapi.it/api/v1/persons?_quantity=7&_gender=male&_birthday_start=2005-01-01"
      )
      .then((res) => {
        setData(res.data.data);
      }).catch(err => {
        console.log(err);
      })
  }, []);


   var result = data.map((a) => a.firstname);

  let score = [];

  result.map((value) => {
    var randomNumber =Math.floor(Math.random() * 100);
    let obj = {
      name: value,
      score: randomNumber
    };
    score.push(obj);
  });
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
<div>
     
         
     {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess data={score} />
        )}
       
        </div>
    );
  };
  
  export default Form;
  