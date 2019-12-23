const incrementor = function* () {
    let i = 0
    while (++i) { yield i }
  }
const idGenerator = incrementor()

export default (state: any, action: any) => {
    switch (action.type) {
      case 'add':
        return [...state, { id: idGenerator.next().value, text: action.text || ''}]
      case 'delete': return state.filter((a: any) => action.id !== a.id)
      case 'save': return []
      default: throw new Error('Invalid action ' + action)
    }
  }