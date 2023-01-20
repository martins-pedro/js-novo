let num = [10,20,30]

//for(i=0; i<num.length; i++) {
//    console.log(num[i])
//}

for(i in num) {
    console.log(num[i])
}

for(i of num) {
    console.log(i)
}