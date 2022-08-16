window.addEventListener('DOMContentLoaded', () => {
    if (!getItem('data')) {
        setItem('data', [
          {
            image: 'https://www.bscliftongardens.catholic.edu.au/wp-content/uploads/sites/22/2019/05/Person-icon.jpg',
            firstName: 'Name',
            surName: 'SurName',
            status: 'not set',
            email: 'not set',
            password: 'not set'
          }
        ])
    }
  })
  
export function setItem (key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}
  
export function getItem (key) {
    return JSON.parse(localStorage.getItem(key))
}


