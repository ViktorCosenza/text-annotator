import axios from 'axios'
import qs from 'qs'

const __API__ = {
  development: "http://localhost:8080",
  production: "https://workspace23.appspot.com/",
  ulicess: 'https://cors-anywhere.herokuapp.com/http://famahotel.tk/git'
}


const client = axios.create({
  baseURL: __API__.development,
  withCredentials: true
})

export const auth = ({username, password}) => client.post('auth/login',{
  "username": username,
  "password": password
})

export const getOntology = () => client.get("/annotation/ontology")
export const getAssigment = () => client.get("/annotation/assigment")


export const submitAnnotation = data => {console.log(data); return client.post("/annotation", data)}

export const submitAnnotationFORREAL = (texts: any) => {
  texts.map(t => client('salvaAnotacoes.php', {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify({
        textoVal: t.text,
        featureVal: t.annotation.first,
        subfeatureVal: t.annotation.second,
        subsubfeatureVal: t.annotation.third,
        eximVal: t.annotation.explicit,
        termVal: t.reference
      })
    })
  )
}