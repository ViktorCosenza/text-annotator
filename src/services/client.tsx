import axios from 'axios'
import qs from 'qs'

import ls from 'local-storage'

const __API__ = {
  development: "http://localhost:8080",
  production: "https://workspace23.appspot.com/",
  ulicess: 'https://cors-anywhere.herokuapp.com/http://famahotel.tk/git'
}


const client = axios.create({
  baseURL: __API__.development
})

export const auth = ({username, password}) => client.post('auth/login',{
  "username": username,
  "password": password
}, {
  headers: {
    Authorization: "Bearer " + ls("@auth"),
  }
})

export const getOntology = () => client.get("/annotation/ontology", {
  headers: {
    Authorization: "Bearer " + ls("@auth"),
  }
})

export const getAssigment = () => client.get("/annotation/assigment", {
  headers: {
    Authorization: "Bearer " + ls("@auth"),
  }
})


export const submitAnnotation = data => client.post("/annotation", data, {
  headers: {
    Authorization: "Bearer " + ls("@auth"),
  }
})

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