function userName(firstname , lastname){
    console.log(`${firstname},${lastname}`)
}

function loginUser(email,password,callback){
    setTimeout(()=>{
        console.log("Now we have your information");
        callback({userEmail:email});

    },3000)}
    function userVideos(email,callback){
        setTimeout(()=>{
            callback(["video1","video2","video3"]);

        },1000)
    }
    

    
    const user =loginUser("mercyb@gmail.com",68888,user=>{
        console.log(user);
        userVideos(user.userEmail,videos=>{
console.log(videos);
        });
    });
    userName("Mercy","Birungi")
    
