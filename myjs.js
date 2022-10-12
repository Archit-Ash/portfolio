document.getElementById("mode").addEventListener("click", darkmode);

function darkmode() {
  document.querySelector("body").classList.toggle("darkmode");
}
let s_index = 0;
slides();
function slides()
{
  let slide=document.getElementsByClassName("proj-l");
  let i;
  for(i=0;i<slide.length;i++)
  {
    slide[i].style.display="none";

  }
  s_index++;
  if(s_index>slide.length)
  {
    s_index=1;
  }
  slide[s_index-1].style.display="block";
  setTimeout(slides,5000);
}
