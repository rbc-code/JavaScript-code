document.getElementById("setbtn").addEventListener("click", dataSet);
document.getElementById("getbtn").addEventListener("click", dataGet);
document.getElementById("clrbtn").addEventListener("click", clearData);

function dataSet()
{
    let firstNm=document.getElementById('fnm').value;
    let lastNm=document.getElementById('lnm').value;
    window.localStorage.setItem("firstName", firstNm);
    window.localStorage.setItem("lastName", lastNm);
}
function dataGet()
{
    let myfnm=window.localStorage.getItem("firstName");
    let mylnm=window.localStorage.getItem("lastName");
    document.getElementById("ans").innerHTML="Hii i am" +myfnm+" " +mylnm+ "from Jhansi !!";
}
function clearData()
{
    window.localStorage.clear();
    alert("Local storage Clear!!");
}