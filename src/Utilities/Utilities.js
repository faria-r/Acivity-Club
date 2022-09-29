const getTimeFromBtn =(id1,id2) =>{
    const btnTimeField = document.getElementById(id1);
    const buttonTime= btnTimeField.innerText;
    const btnTimeInt = parseInt(buttonTime);
    const timeField =  document.getElementById(id2);
    timeField.innerText= btnTimeInt;
}

// const
// // const setTimeToBreakSection = ()
export {getTimeFromBtn};