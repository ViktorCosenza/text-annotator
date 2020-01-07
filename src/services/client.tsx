import axios from 'axios'
import qs from 'qs'

const client = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://famahotel.tk/git'
})

export const auth = ({username, password}) => client('valida.php', {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: qs.stringify({usuario: username, senha: password})
})

export const submitAnnotation = (texts: any) => console.log

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