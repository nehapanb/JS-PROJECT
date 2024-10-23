let obj = [
    {  
        "id":1,
        "img":
      "name":"shantanu",
       "course":"Java Developer",
       "mobno":7000054958,

    },
    {

        "name":"Neha",
        "course":"Mern",
        "mobno":9575374598,
    }
];

let selecttable = document.querySelector('#output');


selecttable.innerHTML = obj.map((e)=`
<tr>
<td>${e.id}</td>
<td><img width="100"src="${e.img}"></td>
<td>${e.name}</td>
<td>${e.course}</td>
<td>${e.mobno}</td>
</tr>
`).join("")
