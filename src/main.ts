import './style.css'
// import { charmander } from './bases/03-classes.ts'
import { charmander } from './bases/04-injection'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1> Hello ${charmander.name}  ${charmander.id}!</h1>
`
