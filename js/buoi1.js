const buttonQuery = document.querySelector('#onPrompt')
const divQuery = document.querySelector('#nguyenleg')
function Click(params) {
    const value = prompt('lô em')
    divQuery.innerText = value
}
 