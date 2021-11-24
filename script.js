
function about(){
    collapseAllTabs();
    openTab('about');
    removeActiveClass();
    addActiveClass('about-head');
}

function documents(){
    collapseAllTabs();
    openTab('documents');
    removeActiveClass();
    addActiveClass('documents-head')
}
function updates(){
    collapseAllTabs();
    openTab('latest');
    removeActiveClass();
    addActiveClass('latest-head');
}
function comments(){
    collapseAllTabs();
    openTab('comments');
    removeActiveClass();
    addActiveClass('comments-head');
}


function openTab(id){
    let element=document.getElementById(id)
    element.style.display="block";
}


function addActiveClass(id){
    let element=document.getElementById(id);
    console.log(element);
    element.classList.add("active");
}

function collapseAllTabs(){
    let aboutSection=document.getElementById('about');
    let documentsSection=document.getElementById('documents');
    let updateSection=document.getElementById('latest');
    let commentsSection=document.getElementById('comments');
    aboutSection.style.display="none";
    documentsSection.style.display = "none";
    updateSection.style.display="none";
    commentsSection.style.display="none";
}

function removeActiveClass(){
    let aboutSection=document.getElementById('about-head');
    let documentsSection=document.getElementById('documents-head');
    let updateSection=document.getElementById('latest-head');
    let commentsSection=document.getElementById('comments-head');
    aboutSection.classList.remove('active');
    documentsSection.classList.remove('active');
    updateSection.classList.remove('active');
    commentsSection.classList.remove('active');
}


function aboutReadMore(){
    openTab('about-read-more-section');
    let element=document.getElementById('read-more-button')
    element.style.display="none";
}


function readUpdates(){
    updates();
    let element=document.getElementById('read-updates-button')
    element.style.display="none";
}


function showMoreDonors(){
    openTab('more-donors');
    let element=document.getElementById('more-donor-button')
    element.style.display="none";
}

function showSocialDonors(){
    openTab('social-more-donors');
    let element=document.getElementById('social-donor-button')
    element.style.display="none";
}

var userSelectedMoney = '1700';

function moneySelected(money, id){
    userSelectedMoney = money;
    let moneyPreview = document.getElementById('money-selected');
    moneyPreview.innerHTML = money;
    removeMoneyActiveClass()
    addActiveClass(id);
}

function removeMoneyActiveClass(){
    let moneyOne=document.getElementById('money-one');
    let moneyTwo=document.getElementById('money-two');
    let moneyThree=document.getElementById('money-three');
    moneyOne.classList.remove('active');
    moneyTwo.classList.remove('active');
    moneyThree.classList.remove('active');
}

function formValidation(){

    removeAllErrors()
    let formData = {};
    let isFormValid;

    let userName=document.getElementById('userName').value;
    let userEmail=document.getElementById('inputEmail').value;
    let isAnonymous=document.getElementById('donationAnonymous').value;
    let mobileNumber=document.getElementById('mobileNumber').value;
    let address=document.getElementById('address').value;
    formData.isDonationAnonymous = isAnonymous;
    if((userName != '') && (userName.length > 0)){
        console.log('sdf');
        formData.userName = userName;
        isFormValid = true;
    } else {
        let element = document.getElementById('name-error');
        element.innerText= "Please Enter the Name";
        element.classList.remove('d-none');
        element.classList.add('d-block');
        isFormValid = false;
    }
    if((mobileNumber != '') && (mobileNumber.length === 10)){
        formData.mobileNumber = mobileNumber;
        isFormValid = true;
    } else {
        let element = document.getElementById('mobile-error')
        element.innerText= "Please Enter the Mobile Number";
        element.classList.remove('d-none');
        element.classList.add('d-block');
        isFormValid = false;
    }
    if((address != '') && address.length > 0){
        formData.address = address;
        isFormValid = true;
    } else {
        let element = document.getElementById('address-error')
        element.innerText= "Please Enter the Address";
        element.classList.remove('d-none');
        element.classList.add('d-block');
        isFormValid = false;
    }
    if((userEmail != '') && userEmail.length > 0){
        formData.userEmail = userEmail;
        console.log(formData);
        isFormValid = true;
    } else {
        let element = document.getElementById('email-error')
        element.innerText= "Please Enter the valid Email";
        element.classList.remove('d-none');
        element.classList.add('d-block');
        isFormValid = false;
    }
    if(!isFormValid){
        document.getElementById('donation-success').innerText = "Your donation for Rs "+ userSelectedMoney  + " is successful";
        $('#contributeModal').modal('hide');
    }
    return false;
}

function removeAllErrors() {
    document.getElementById('name-error').classList.add('d-none');
    document.getElementById('email-error').classList.add('d-none');
    document.getElementById('mobile-error').classList.add('d-none');
    document.getElementById('address-error').classList.add('d-none');
    
    document.getElementById('name-error').classList.remove('d-block');
    document.getElementById('email-error').classList.remove('d-block');
    document.getElementById('mobile-error').classList.remove('d-block');
    document.getElementById('address-error').classList.remove('d-block');
}