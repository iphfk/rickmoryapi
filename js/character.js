const descryptId = (id) => {
  return parseInt(id, 36)
}


//Função responsavel por fazer a requisição a API
const loadCharacter = async (url, id) => {
  try {
    //request / response => res
  const res = await fetch(`${url}/${id}`)
  if(!res.ok){
    throw new Error('Erro ao carregar o personagem')
  }
  const data = await res.json()

  return data
  } catch (error) {
   console.log(error)
  }
}


const loadAll = async () => {
  const urlParams = new URLSearchParams(window.location.search)
  console.log(urlParams)
  const idParam = urlParams.get('id')
  console.log(idParam)

  if(!idParam){
    // colocar o usuário na pagina inicial
    console.log('ID não encontrado na url')
    return
  }

  const idDescrypted = descryptId(idParam)
  console.log(idDescrypted)
  const baseUrl = `https://rickandmortyapi.com/api/character/`

  try {
    const character = await loadCharacter(baseUrl, idDescrypted)
  } catch (error) {
    console.log(error)
  }

}
loadAll()
