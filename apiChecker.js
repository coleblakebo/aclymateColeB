function schemaChecker(body, schema, boolArr = []){
    Object.keys(schema).forEach(key => {
        if(typeof schema[key] === 'object'){
            if(schema[key].required){
                if(!(key in body))
                    boolArr.push(false)
                 schemaChecker(body[key],schema[key], boolArr)
            }
            if(key in body){
                if(schema[key].type != typeof body[key])
                    boolArr.push(false)
            }
        }
    })
    if(boolArr.every(e => e != false))
        return true
    return false
}