function enter (){
    let weight=parseFloat(document.getElementById("weight").value);
    let height=parseFloat(document.getElementById("height").value);
    let BMI= weight/(height*height);
    if(BMI<18.5){
        alert("underweight");
    }else {
        if(18.5<=BMI<=25){
            alert("normal");
        }
        else {
            alert("overweight");
        }
        if(BMI>=30){
            alert("obese");
        }
    }
}