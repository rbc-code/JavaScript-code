document.getElementById("btn1").addEventListener("click", myCal);

function myCal()
{
    let physics=Number(document.getElementById("phy").value);
    let che=Number(document.getElementById("che").value);
    let eng=Number(document.getElementById("eng").value);
    let hnd=Number(document.getElementById("hnd").value);
    let math=Number(document.getElementById("math").value);

    let totalMarks= physics+che+eng+hnd+math;
    let per=totalMarks*100/500;
    document.getElementById("ans1").innerHTML="Total Marks :"+totalMarks;
    document.getElementById("ans2").innerHTML="Percentage :"+per+"%";
}