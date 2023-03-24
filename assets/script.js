function getPassword() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+?><:{}[]'";
    let passwordLength = 8-126;
    
    for (let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        
        password += chars.substring(randomNumber, randomNumber + 1);
        console.log(password);
    }
}