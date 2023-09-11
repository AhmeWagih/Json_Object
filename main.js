const myJson = new XMLHttpRequest();
myJson.open("GET","https://jsonplaceholder.typicode.com/posts");
myJson.send();
myJson.onreadystatechange=function(){
  if(this.readyState === 4 && this.status === 200 ){
    let mainDate = JSON.parse(this.responseText)
    let div =document.createElement("div");
    div.id="data";
    for(let i=0;i<5;i++){
      let userId = document.createElement("h2");
      let userIdText=document.createTextNode(`UserId: ${mainDate[i].userId}`);
      userId.appendChild(userIdText);
      let id = document.createElement("p");
      let idText=document.createTextNode(`Id: ${mainDate[i].id}`);
      id.appendChild(idText);
      let body = document.createElement("p");
      let bodyText=document.createTextNode(`Body: ${mainDate[i].body}`);
      body.appendChild(bodyText);
      let title = document.createElement("p");
      let titleText=document.createTextNode(`Title: ${mainDate[i].title}`);
      title.appendChild(titleText);
      let data = document.createElement("div");
      data.appendChild(userId);
      data.appendChild(id);
      data.appendChild(body);
      data.appendChild(title);
      div.appendChild(data);
      document.body.appendChild(div);
    }
  }
}