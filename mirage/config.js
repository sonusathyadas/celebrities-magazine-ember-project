export default function () {

    this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    this.namespace = '/api/v1';    // make this `/api`, for example, if your API is namespaced
    this.timing = 400;      // delay for each request, automatically set to 0 during testing

    //this.get('/persons')

    this.get('/persons/:id')

    this.post('/persons');

    this.get('/persons', (schema, request) => {                   
        let prof = request.queryParams.profession;          
        if (prof != undefined) { 
            return schema.persons.where({profession:prof})
        } else {
            return schema.persons.all()
        }
    })
}
