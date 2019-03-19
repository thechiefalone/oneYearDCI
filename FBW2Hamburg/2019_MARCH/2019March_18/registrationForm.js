var personalInformation = {
    firstName: "",
    lastName: "",
    birthDate: "",
    nationality: "",
    phoneNumber: ""
};

function personalInformationSaveStep() {
    Object.keys(personalInformation).forEach(key => {
        let value = document.getElementById(key).value;
        personalInformation[key] = value;
    });
    let input =document.getElementById("personal-info").getElementsByTagName("input");
    let checker=true;
    for(let i=0;i<input.length;i++){
        if(input[i].value==""){
        checker=false;
        break;
        }
    }
    if(checker){
        confirm("Are you sure for next step?");
        if (confirm) {
            document.getElementById("personal-info").style.display = "none";
            document.getElementById("btn1").style.display = "none";
        }
        document.getElementById("address-info").style.display = "block";
        document.getElementById("btn2").style.display = "block";
    }else{
        alert("Please fill the form");
    }

}

let addressInformation = {
    address: "",
    postCode: ""
};

function addressInformationSaveStep() {
    Object.keys(addressInformation).forEach(key => {
        let value = document.getElementById(key).value;
        addressInformation[key] = value;
    });

    confirm("Are you sure for next step?");
    if (confirm) {
        document.getElementById("address-info").style.display = "none";
        document.getElementById("btn2").style.display = "none";
    }
    document.getElementById("profile-info").style.display = "block";
    document.getElementById("btn3").style.display = "block";
}
let profileInformation = {
    profilePicture: "",
    username: "",
    password: "",
    repassword: ""
};

function profileInformationSaveStep() {

    Object.keys(profileInformation).forEach(key => {
        let value = document.getElementById(key).value;
        profileInformation[key] = value;
    });
    let checker=true;

    if(profileInformation.password === profileInformation.repassword){
        confirm("You will submit the Form");
    if (confirm) {
        document.getElementById("profile-info").style.display = "none";
        document.getElementById("btn3").style.display = "none";
    }

    }else{
        alert("Please check your password");
        checker=false;
    }
if(checker){
    document.getElementById("result").innerHTML="<h2>Your Personal Data</h2>";
    buildTable();
}

function buildTable(){
    let result = document.getElementById("result");
    let table = document.createElement("table");
//Personal Information Table
    let row1 = document.createElement("tr");
    let firstName = document.createElement("td");
    firstName.innerText="First Name:"
    let firstNameData=document.createElement("td");
    firstNameData.innerText=personalInformation.firstName;
    row1.append(firstName)
    row1.append(firstNameData)
    table.append(row1)

    let row2 = document.createElement("tr");
    let lastName = document.createElement("td");
    lastName.innerText="Last Name:"
    let lastNameData=document.createElement("td");
    lastNameData.innerText=personalInformation.lastName;
    row2.append(lastName)
    row2.append(lastNameData)
    table.append(row2)

    let row3 = document.createElement("tr");
    let birthDate = document.createElement("td");
    birthDate.innerText="Birth Date:"
    let birthDateData=document.createElement("td");
    birthDateData.innerText=personalInformation.birthDate;
    row3.append(birthDate)
    row3.append(birthDateData)
    table.append(row3)

    let row4 = document.createElement("tr");
    let nationality = document.createElement("td");
    nationality.innerText="Nationality:"
    let nationalityData=document.createElement("td");
    nationalityData.innerText=personalInformation.nationality;
    row4.append(nationality)
    row4.append(nationalityData)
    table.append(row4)

    let row5 = document.createElement("tr");
    let phoneNumber = document.createElement("td");
    phoneNumber.innerText="Phone Number:"
    let phoneNumberData=document.createElement("td");
    phoneNumberData.innerText=personalInformation.phoneNumber;
    row5.append(phoneNumber)
    row5.append(phoneNumberData)
    table.append(row5)

//Address Information Table
    let row6 = document.createElement("tr");
    let address = document.createElement("td");
    address.innerText="Address:"
    let addressData=document.createElement("td");
    addressData.innerText=addressInformation.address;
    row6.append(address)
    row6.append(addressData)
    table.append(row6)

    let row7 = document.createElement("tr");
    let postCode = document.createElement("td");
    postCode.innerText="Post Code:"
    let postCodeData=document.createElement("td");
    postCodeData.innerText=addressInformation.postCode;
    row7.append(postCode)
    row7.append(postCodeData)
    table.append(row7)

//Profile Information Table
    let row8 = document.createElement("tr");
    let profilePicture = document.createElement("td");
    profilePicture.innerText="Profile Picture:"
    let profilePictureData=document.createElement("td");
    profilePictureData.innerText=profileInformation.profilePicture;
    row8.append(profilePicture)
    row8.append(profilePictureData)
    table.append(row8)

    let row9 = document.createElement("tr");
    let username = document.createElement("td");
    username.innerText="User Name:"
    let usernameData=document.createElement("td");
    usernameData.innerText=profileInformation.username;
    row9.append(username)
    row9.append(usernameData)
    table.append(row9)

    let row10 = document.createElement("tr");
    let password = document.createElement("td");
    password.innerText="Password:"
    let passwordData=document.createElement("td");
    passwordData.innerText=profileInformation.password;
    row10.append(password)
    row10.append(passwordData)
    table.append(row10)

//Append Whole Table
result.appendChild(table);
}
}