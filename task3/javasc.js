const temp=()=>{
    const a=document.getElementById('val').value;
    const b=document.getElementById('tm');
    const v=tm.options[b.selectedIndex].value;
    const d=(c)=>{
        let fah =Math.round((c* 9/5)+32);
        return fah;
    }
    const e=(f)=>{
        let cel=Math.round((f-32)* 5/9);
        return cel;
    }
    let r;
    if(v=='c'){
        r=d(a);
        document.getElementById('cal').innerHTML=r+"°Fahrenheit";
    }
    else{
        r=e(a);
        document.getElementById('cal').innerHTML=r+"°Celsius";
    }
}