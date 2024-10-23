let arrofobj = [
    {
        "id":1,
        "imageurl":"https://replicate.delivery/mgxm/0958ab0c-8d26-45f8-a5f1-a27a1f2259cc/baby.jpg",
        "pname":"onepiece",
        "bname":"myntra",
        "pprice":4000
    },
    {
        "id":2,
        "imageurl":"https://replicate.delivery/mgxm/0958ab0c-8d26-45f8-a5f1-a27a1f2259cc/baby.jpg",
        "pname":"onepiece",
        "bname":"myntra",
        "pprice":4000
    },
];
 let selectdiv = document.querySelector('#ans');

 selectdiv.innerHTML = arrofobj.map((card)=>`
 <div style="margin:20px;box-shadow:0px 0px 10px 2px black">
 <img width="200px" height="200px" src="${card.imageurl}"alt="">
 <div>${card.bname}</div>
 <div>${card.bname}</div>
 <div>${card.pprice}</div>
 <div>add to cart</div>
 <div>buy now</div>
 </div>
 `).join("")