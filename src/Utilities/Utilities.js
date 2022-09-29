const getTimeFromBtn =(id1,id2) =>{
    const btnTimeField = document.getElementById(id1);
    const buttonTime= btnTimeField.innerText;
    const btnTimeInt = parseInt(buttonTime);
    const timeField =  document.getElementById(id2);
    timeField.innerText= btnTimeInt;
    localStorage.setItem('Break',JSON.stringify(btnTimeInt));
    // const storedTime = localStorage.getItem('Break');
    // if(storedTime){
    
    //     timeField.innerText = storedTime;
    // }
    // else{

    // }
    
  
}
export {getTimeFromBtn};