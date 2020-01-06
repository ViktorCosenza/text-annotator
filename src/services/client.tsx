import axios from 'axios'

const client = axios.create({
  baseURL: 'http://famahotel.tk/git'
})

export const auth = ({username, password}) => client.post('valida.php', {
    usuario: username,
    senha: password
  }, {
    
  })