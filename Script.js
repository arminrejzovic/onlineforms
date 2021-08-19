const container = document.getElementById("main-container");
const administrationButton = document.getElementById("administration");
const formsButton = document.getElementById("forms");

administrationButton.addEventListener("click", showAdmin);
formsButton.addEventListener("click", showForms);

showAdmin();

function showAdmin(){
    container.innerHTML =
        `<input type="text" id="searchbar" placeholder="Form name"> <button id="search-button" onclick="searchDB()">Search</button> 
         <div id="form-container"></div> <br> <button id="save-form" onclick="saveForm()">Save</button>`

    administrationButton.className = "active"
    formsButton.className = "inactive";
}

function showForms(){
    formsButton.className = "active"
    administrationButton.className = "inactive";
    container.innerHTML =
        `<label>Form name: </label>
         <input type="text" id="form-searchbar">
         <label>Version: </label>
         <input type="number" id="version-searchbar">
         <button id="search-button" onclick="searchForms()">Search</button> 
         <div id="form-container"></div> <br> <button id="save-data">Save</button>`;
}

