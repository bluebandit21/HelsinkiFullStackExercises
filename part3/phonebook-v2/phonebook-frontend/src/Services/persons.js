import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    return (
        axios
        .request(baseUrl)
        .then(request => {
            return request.data
        })
        .catch(error => {
            console.log("Error in GET: ",error)
            return []
        })
    )
}

const addPerson = (person) => {
    let idPerson = {...person,id: person.name}
    return (
        axios
        .post(baseUrl,idPerson)
            .then(request => 0)
            .catch(error => {
                console.log("Error in POST: ",error)
                return 1
            })
    )
}

const updatePerson = (person,newNumber) => {
    console.log(person,newNumber)
    return (
        axios
            .put(`${baseUrl}/${person.name}`,{...person,number:newNumber})
            .then(request => 0)
            .catch(error => {
                console.log("Error in PUT: ",error)
                return 1
            })
    )
}
const deletePerson = (person) => {
    return (
        axios
            .delete(`${baseUrl}/${person.name}`)
            .then(request => 0)
            .catch(error => {
                console.log("Error in DELETE: ",error)
                return 1
            })
    )
}

export default { getAll, addPerson, deletePerson, updatePerson }