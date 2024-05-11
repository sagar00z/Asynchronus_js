function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
            resolve('order of coffee recived')
        }
        else{
            reject('other order reject')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is processing')
        resolve(`${order} is served`)
    })
}


// placeOrder('coffee').then(function(orderPlaced){
    //     console.log(orderPlaced)
    //     let orderIsProcess = processOrder(orderPlaced)
    //     return orderIsProcess
    // }).then(function(processedOrder){
    //     console.log(processedOrder)
    // }).catch(function(err){
    //     console.log(err)
    // }) 


async function serveOrder(){
    let OrderPlaced = await placeOrder('coffee')
    console.log(OrderPlaced)
    let processedOrder = await processOrder(OrderPlaced)
    console.log(processedOrder)
}
serveOrder()