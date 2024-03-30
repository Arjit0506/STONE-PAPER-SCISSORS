let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const usersc=document.querySelector("#user-score");
const compsrc=document.querySelector("#comp-score");
const getcompchoice = ()=>
{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);//math.random generates a random number between 0 and 1 but we want the nmber between 0 to 2 therefore we multiply by 3 and .floor removes the decimal
    return options[randIdx];
};
const displaywinner=(userwin,userchoice,compchoice)=>
{
    if(userwin ===true)
    {
        userscore++;
        usersc.innerText=userscore;
        msg.innerText=`You win!!! YOUR ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="#7DCD85";
    }
    else{
        compscore++;
        compsrc.innerText=compscore;
        console.log("comp is winner")
        msg.innerText=(`Oops you loose!!! ${compchoice} beats your ${userchoice}`)
        msg.style.backgroundColor="#F93943";
    }
}
const drawgame=() =>
{
    msg.innerText="DRAW,Play Again";
    msg.style.backgroundColor="#9B97B2";
}
const playgame=(userchoice)=>
{
    //generate computer choice
    const compchoice=getcompchoice();
    if(userchoice === compchoice)
    {
        drawgame();
    }
    else
    {
        let userwin=true;
        /*if(userchoice ==="rock" && compchoice==="paper"){
            userwin=false;
        }
        else if(userchoice === "paper" && compchoice ==="scissors")
        {
            userwin= false;
        }
        else(userchoice ==="scissor" && compchoice ==="rock")
        {
            userwin=false;
        }*/
        if(userchoice ==="rock")
        {
            userwin=compchoice==="paper" ? false:true;
        }
        else if(userchoice ==="paper")
        {
            userwin=compchoice==="scissors" ? false:true;
        }
        else(userchoice ==="scissors")
        {
            userwin=compchoice==="rock" ? false:true;
        }
        displaywinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});