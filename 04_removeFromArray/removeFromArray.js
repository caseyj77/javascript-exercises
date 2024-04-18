const removeFromArray = function(userArray, ...args) {
    const newArray = []  //creates a container to hold the results in an array
    userArray.forEach(items => {
        if (!args.includes(items)) {
            newArray.push(items)
        }               // takes the userArray and seraches for the items in args and then pushes those items in newArray. However since ! is included it will only add the items not in the args
                        // this effectivly removes the items from the array. 
                        // I had to look this one up on youtube but learned how to use ...args, forEach, included and push.
        
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
