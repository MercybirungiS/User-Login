
function loginUser(firstname,lastname,email,password,ID,callback){
    setTimeout(()=>{
        console.log("Now we have your information");
        callback({userFN:firstname,userLN:lastname,userEmail:email,userPassword:password,userID:ID});

    },3000)}
   
    function userVideos(email,callback){
        setTimeout(()=>{
            callback(["video1","video2","video3"]);

        },1000)
    }
    

    
    const user =loginUser("Mercy","Birungi","mercyb@gmail.com",68888,"103f",user=>{
        console.log(user);
        userVideos(user.userEmail,videos=>{
console.log(videos);
        });
    });
   
    

    
