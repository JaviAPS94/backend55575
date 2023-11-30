function operacionCompleja() {
    let result = 0;
    for(let i=0; i<5e9; i++) {
        result+=i
    };
    return result;
}

process.on('message', message => {
    console.log(`Soy el proceso hijo y mi padre dice ${message}`);
    const result = operacionCompleja();
    process.send(result);
})