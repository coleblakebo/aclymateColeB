function formatCsv(raw) {
    /*Find the headers by checking to ensure row assigned to headers is not empty, and is the same length as the following row (to avoid setting metadata as header)*/
    if(raw.length < 2)
        return []
    headers = raw.shift()
    next = raw.shift()
    while(!headers.length || headers.length != next.length){
        if(!raw.length)
            return []
        headers = next
        next = raw.shift()
    }
    raw.unshift(next)   
    //Creates the empty array to fill with objects
    formattedData = []
    //Iterates through the data
    for (i = 0; i < raw.length; i++) {
        curr = raw[i]
        //Creates empty object and sets fields to desired values
        obj = {}
        //Checks if all of the data is there, if not fills obj w error message
        if(curr.length == headers.length){
        for(j = 0;j<curr.length;j++)
                obj[headers[j]] = curr[j]
        }
        else
            obj["Error in obj " + i] = "Incorrect number of data points; Make sure data lines up with headers."
        //Makes object immutable and places onto list
        obj.freeze
        formattedData.push(obj)
    }
    //Makes list immutable and returns it
    formattedData.freeze
    return formattedData
}
