let row = "";
for(let i = 1000; i >= 1; i--){
    row += i + " ";
    if(i % 5 === 1){
        console.log(row.trim())
        row = "";
    }
}


