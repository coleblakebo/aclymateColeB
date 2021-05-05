function schemaChecker(body, schema, boolArr = []){
    //Loops through schema
    Object.keys(schema).forEach(key => {
        //Checks if the current key is required and in body, if not pushes false
        if(typeof schema[key] === 'object'){
            if(schema[key].required){
                if(!(key in body))
                    boolArr.push(false)
                 schemaChecker(body[key],schema[key], boolArr)
            }
            // Checks if the types match, if not push false
            if(key in body){
                if(schema[key].type != typeof body[key])
                    boolArr.push(false)
            }
            schemaChecker(body[key],schema[key], boolArr)
        }
    })
    //Checks if false was ever pushed
    if(boolArr.every(e => e != false))
        return true
    return false
}
