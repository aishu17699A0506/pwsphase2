function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status== "200"){
        callback(xhr.responseText);
    }

  }
  xhr.send(null);

}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.career);
  education(data.education);
  skills(data.skills);

})
var parent=document.querySelector('.parent');
var profile1=document.querySelector('.profile1');
var details=document.querySelector('.details');
function profile(pro) {
  var image=document.createElement('img');
  image.src=pro.img;
  profile1.appendChild(image);
  parent.appendChild(profile1);
  var name=document.createElement('h1');
  name.textContent=pro.name;
  profile1.appendChild(name);
  var hr=document.createElement('hr');
  profile1.appendChild(hr);

  var email=document.createElement('h2');
  email.textContent=pro.email;
  profile1.appendChild(email);
}
function career(car) {
  var data=document.createElement('h3');
  data.textContent="CAREER DETAILS";
  details.appendChild(data);
  var hr=document.createElement('hr');
  details.appendChild(hr);
  var career=document.createElement('p');
  career.textContent=car.info;
  details.appendChild(career);
  parent.appendChild(details);
  var hr=document.createElement('hr');
  details.appendChild(hr);
}
function education(edu){
  var line=document.createElement('h3');
  line.textContent="EDUCATIONAL DETAILS";
  details.appendChild(line);
  var hr=document.createElement('hr');
  details.appendChild(hr);
var table=document.createElement('table');
table.border="3"
let row='';

  row += "<tr>"+"<th>"+"S.NO"+"</th>"+
  "<th>"+"DEGREE" +"</th>"+
  "<th>"+"INSTITUTION" +"</th>"+
  "<th>"+"YEAR OF PASSING"+"</th>"+
  "</tr>";

for(i in edu){
  row += "<tr>"+"<td>"+edu[i].sno +"</td>"+
  "<td>"+edu[i].degree +"</td>"+
  "<td>"+edu[i].institution +"</td>"+
  "<td>"+edu[i].per +"</td>"+
  "</tr>";
  }
  table.innerHTML=row;
  details.appendChild(table);
  parent.appendChild(details);
}
function skills(skill){
  var ski=document.createElement('h4');
  ski.textContent="SKILLS SET";
  details.appendChild(ski);
  var ul=document.createElement('ul');
  details.append(ul);
  for( i in skill){
    var li=document.createElement('li');
    li.textContent=skill[i].info;
    ul.appendChild(li);

  }
}
