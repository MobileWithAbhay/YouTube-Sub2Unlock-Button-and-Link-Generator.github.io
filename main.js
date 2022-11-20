let YouTube = document.querySelector('.YouTube');
let Download = document.querySelector('.Download');
var hidden1 = document.querySelector('.hidden1');
var hidden2 = document.querySelector('.hidden2');

//Subscribe Link function
function SubscribeLink(){
  if(YouTube.value.indexOf("https://youtube.com/channel/") != -1){
    hidden1.classList.add('active');
    hidden2.classList.remove('active');
    var ytL = YouTube.value + "?sub_confirmation=1";
    document.querySelector('.SubLink').value = ytL;
    document.querySelector('.a').href = ytL;
  }
  else{
  alert('Enter Your YouTube Url');
  }
}
//Subscribe Link Copy function
let SubLink = document.querySelector('.SubLink');
function ClipboardLink(){
    if(SubLink.value != ""){
       const textarea = document.createElement('textarea');
       const resultE = SubLink.value;
    if (!SubLink) { return; }
       textarea.value = resultE;
       document.body.appendChild(textarea);
       textarea.select();
       document.execCommand('copy');
       textarea.remove();
       alert('👇👇👇Code Copied to Clipboard👇👇👇\n'+SubLink.value);
    }
    else {
       alert('Enter Your YouTube Url');
    }
 }

//Subscribe Button function
function Subscribebtn(){
  if(YouTube.value.indexOf("https://youtube.com/channel/") != -1){
    if(Download.value!=""){
      hidden1.classList.remove('active');
      var youTu = YouTube.value;
      var down = Download.value;
      hidden2.classList.add('active');
      
 // Subscribe Preview Button
    document.querySelector('.preview').innerHTML = `
    <h1 class="text">Preview Subscribe Button</h1>
    <div class="buttons" style="border-radius: 6px; font-size: 15px; text-align: center;">
     <a class="fa fa-youtube-play" href="#" id="btn_yt" onclick="show()" onmouseout="this.style.background='blue'" onmouseover="this.style.background='#0000ff'" style="background: blue; border-radius: 6px; color: white; display: inline-block; font-size: 25px; font-weight: 700; margin: 15px 30px; padding: 14px 0px; text-decoration: none; transition: all 0.2s linear 0s; width: 250px;">&nbsp;<strong>Subscribe To Unlock</strong></a>
     <div style="margin: auto;">
     <a href="${down}" id="yt" onmouseout="this.style.background='grey'" onmouseover="this.style.background='#808080'" style="background-color: grey; border-radius: 6px; color: white; display: none; font-size: 25px; font-weight: 700; margin: 15px 30px; padding: 14px 0px; text-decoration: none; transition: all 0.2s linear 0s; width: 250px;"><strong>Download</strong></a>
     <a class="fa fa-download" href="#" id="ytv" style="background-color: brown; border-radius: 6px; color: white; display: none; font-size: 25px; font-weight: 500; margin: 15px 30px; padding: 14px 0px; text-decoration: none; transition: all 0.2s linear 0s; width: 250px;">&nbsp;<strong>Checking......</strong></a>
   </div>
</div>
 `
 //Subscribe Code Button
    document.querySelector('.result').value = 
      `<div class="buttons" style="border-radius: 6px; font-size: 15px; text-align: center;">
       <a class="fa fa-youtube-play" href="#" id="btn_yt" onclick="show()" onmouseout="this.style.background='blue'" onmouseover="this.style.background='#0000ff'" style="background: blue; border-radius: 6px; color: white; display: inline-block; font-size: 25px; font-weight: 700; margin: 15px 30px; padding: 14px 0px; text-decoration: none; transition: all 0.2s linear 0s; width: 250px;">&nbsp;<strong>Subscribe To Unlock</strong></a>
       <div style="margin: auto;">
       <a href="${down}" id="yt" onmouseout="this.style.background='grey'" onmouseover="this.style.background='#808080'" style="background-color: grey; border-radius: 6px; color: white; display: none; font-size: 25px; font-weight: 700; margin: 15px 30px; padding: 14px 0px; text-decoration: none; transition: all 0.2s linear 0s; width: 250px;"><strong>Download</strong></a>
        <a class="fa fa-download" href="#" id="ytv" style="background-color: brown; border-radius: 6px; color: white; display: none; font-size: 25px; font-weight: 500; margin: 15px 30px; padding: 14px 0px; text-decoration: none; transition: all 0.2s linear 0s; width: 250px;">&nbsp;<strong>Checking......</strong></a>
    </div>
</div>
<!--Start Youtube subcribe javascript-->
<script type="text/javascript">
      var _0x28f9 = ["\x3C\x68\x32\x20\x61\x6C\x69\x67\x6E\x3D\x22\x63\x65\x6E\x74\x65\x72\x22\x3E\x3C\x69\x66\x72\x61\x6D\x65\x20\x73\x72\x63\x3D\x22", "\x2F\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E\x3C\x2F\x68\x31\x3E", "\x77\x72\x69\x74\x65"]; document[_0x28f9[2]](_0x28f9[0] + src1 + _0x28f9[1])
</script>
<script type="text/javascript">
      document.getElementById("yt").style.display = "none";
      document.getElementById("ytv").style.display = "none";
    function show() {
      window.open('${youTu}?sub_confirmation=1');
      // sleep(3000);
      setTimeout(function () {
      document.getElementById("yt").style.display = "block";
      document.getElementById("btn_yt").style.display = "none";
      document.getElementById("ytv").style.display = "none";
    }, 10000);
     //alert();
     document.getElementById("btn_yt").style.display = "none";
     document.getElementById("ytv").style.display = "block";
  }
 </script>`
   }
   else{
       alert('Enter Your Download Url');
     }
  }
  else{
      alert('Enter Your YouTube Url');
  }
}
//Subscribe Code Copy Button function
let result = document.querySelector('.result');
function Clipboard(){
     if(result.value != ""){
        const textarea = document.createElement('textarea');
        const resultE = result.value;
     if (!result) { return; }
        textarea.value = resultE;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('👇👇👇Code Copied to Clipboard👇👇👇\n'+result.value);
      }
      else{
        alert('Enter Your YouTube Url');
      }
   }

 // Subscribe Preview Button javascript function 

 var _0x28f9 = ["\x3C\x68\x32\x20\x61\x6C\x69\x67\x6E\x3D\x22\x63\x65\x6E\x74\x65\x72\x22\x3E\x3C\x69\x66\x72\x61\x6D\x65\x20\x73\x72\x63\x3D\x22", "\x2F\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E\x3C\x2F\x68\x31\x3E", "\x77\x72\x69\x74\x65"]; document[_0x28f9[2]](_0x28f9[0] + src1 + _0x28f9[1])
   document.getElementById("yt").style.display = "none";
   document.getElementById("ytv").style.display = "none";
  function show() {
    window.open(YouTube.value+'?sub_confirmation=1');
     // sleep(3000);
     setTimeout(function () {
     document.getElementById("yt").style.display = "block";
     document.getElementById("btn_yt").style.display = "none";
     document.getElementById("ytv").style.display = "none";
     }, 10000);
     //alert();
    document.getElementById("btn_yt").style.display = "none";
    document.getElementById("ytv").style.display = "block";
  }
