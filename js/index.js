const getPunkApi = (param) => fetch('https://api.punkapi.com/v2/beers'+param)
    .then(response => response.json())
    .catch(e => console.error('Feil'))
    .then(response => {
        var result = response;
        document.getElementById('output').innerHTML = "";
        for (let i = 0; i < result.length; i++) {
          document.getElementById('output').innerHTML = document.getElementById('output').innerHTML +
          '<div style="word-wrap: break-word;padding: 10px;background-color:white;margin:4% 4% 4% 4%;opacity:0.8;text-align:canter;" class="col-md-3">'+
            '<p style="font-size:30px;font-weight: bold;">'+result[i].name+'</p><img src="'+result[i].image_url+'" width="70%">'+
            '<p style="font-size:20px;font-weight: bold;text-align:left;padding-top:50px;"><span style="color:#e64d00;">Description : </span>'+result[i].description+'</p>'+
            '<p style="font-size:20px;font-weight: bold;text-align:left;"><span style="color:#e64d00;">First brewed : </span>'+result[i].first_brewed+'</p>'+
            '<p style="font-size:20px;font-weight: bold;text-align:left;"><span style="color:#e64d00;">Tagline : </span>'+result[i].tagline+'</p>'+
            '<p style="font-size:20px;font-weight: bold;text-align:left;"><span style="color:#e64d00;">Yeast : </span>'+result[i].ingredients.yeast+'</p>'+
            '<p style="font-size:20px;font-weight: bold;text-align:left;"><span style="color:#e64d00;">Food pairing : </span>'+result[i].food_pairing+'</p>'+
            '</div>';
        }
      });

const sendParam = (Bname,Yname,Hname,Fname) => {
  if (Bname == "" && Yname == "" && Hname == "" && Fname == "" ) {
    getPunkApi(" ");
  }else{
    var param = "?";
    if (Bname != "") {
      param = param + "beer_name=" + Bname;
    }
    if (Yname != "") {
      param = param + "&yeast=" + Yname;
    }
    if (Hname != "") {
      param = param + "&hops=" + Hname;
    }
    if (Fname != "") {
      param = param + "&food=" + Fname;
    }
    getPunkApi(param);
  }
}

getPunkApi(" ");
