const featurelist =document.querySelector('.dropup-list-1');
const company =document.querySelector('.dropup-list-2');
const droppic =document.querySelector('.dropdown');
const dropcompany =document.querySelector('.dropdown-company');
const featureimg = document.querySelector('.dropdown-feature-img');
const companyimg = document.querySelector('.dropdown-company-img');
function displayfeature() {
    if (featurelist.style.display == 'none') {
        featurelist.style.display = 'flex'   
             
    }else{
        featurelist.style.display = 'none'    
    }
    if (featureimg.src.match("./images/icon-arrow-down.svg")) {
        featureimg.src = "/images/icon-arrow-up.svg ";
   }else{
       featureimg.src = "./images/icon-arrow-down.svg"
   }
}
function displaycompany() {
    if (company.style.display == 'none') {
        company.style.display = 'flex'         
    }else{
        company.style.display = 'none' 
        featureimg.src="./images/icon-arrow-down.svg" 
    }
    if (companyimg.src.match("./images/icon-arrow-down.svg")) {
        companyimg.src = "/images/icon-arrow-up.svg ";
   }else{
       companyimg.src = "./images/icon-arrow-down.svg"
   }
}