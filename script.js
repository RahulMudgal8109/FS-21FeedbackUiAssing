let emoji = document.querySelectorAll(".emoji");
console.log(emoji);
let submiBtn=document.getElementById('submiBtn');
let mainCard=document.getElementById("mainCard");
let idx;

emoji.forEach((item, index) => {

    item.addEventListener('click', function () {

        for (var i = 0; i < emoji.length; i++) {
            emoji[i].classList.remove("active");

        }
        //console.log(emoji[index].getAttribute("id"))
        emoji[index].classList.add("active");
         idx=index;
    })

})
submiBtn.addEventListener('click',function()
{
    console.log(emoji[idx].getAttribute("id"));
    mainCard.innerHTML=" ";
    
    let div=document.createElement('div');
    div.classList.add("card-body");
    div.innerHTML=`<div class="info mt-2">
            <h2 class=mt-2>Thank You!</h2>

            <h2 class="mt-2">FeedBack: ${emoji[idx].getAttribute("id")}</h2>
            <p class="mt-2">We'll use your feedback to improve our customer support. </p>
        </div>`

        mainCard.appendChild(div);

})
