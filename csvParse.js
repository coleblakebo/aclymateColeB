function formatCsv(raw) {


    /*Find the headers by checking to ensure row assigned to headers is not empty, and is the same length as the following row (to avoid setting metadata as header)*/
    headers = raw.shift()
    next = raw.shift()
    while(!headers.length || headers.length != next.length){
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
        for(j = 0;j<curr.length;j++)
                obj[headers[j]] = curr[j]
        //Makes object immutable and places onto list
        obj.freeze
        formattedData.push(obj)
    }
    //Makes list immutable and returns it
    formattedData.freeze
    return formattedData
}