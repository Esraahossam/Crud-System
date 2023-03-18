var nameInput = document.getElementById("productName")
var priceInput = document.getElementById("productPrice")
var categoryInput = document.getElementById("productCategory")
var descriptionInput = document.getElementById("productDescription")
var searchInput=document.getElementById("searchInput")
var alertName=document.getElementById("alertName")
var alertPrice=document.getElementById("alertPrice")
var alertDescription=document.getElementById("alertDescription")
var productlist = [];
var currentindex=0 
if (localStorage.getItem("productlist") != null) {
   productlist = JSON.parse(localStorage.getItem("productlist"))}
//    else{
//     productlist=[]
//    }
    display()
  
function addProduct() {
    if(validName()==true &&validPrice()==true&&validDescrpition()==true){
    var product = {
        name: nameInput.value,
        price: priceInput.value,
        categ: categoryInput.value,
        desc: descriptionInput.value,
    }
    productlist.push(product)
     localStorage.setItem("productlist", JSON.stringify(productlist))
    display()

}}
function display() {
    var temp = ""
    for (var i = 0; i < productlist.length; i++) {
        temp += `<tr>
                    <td>`+ i + `</td>
                    <td>`+ productlist[i].name + `</td>
                    <td>`+ productlist[i].price + `</td>
                    <td>`+ productlist[i].categ + `</td>
                    <td>`+ productlist[i].desc + `</td>
                    <td><button class="btn btn-warning"onclick="updateProduct(`+ i + `)"  >Update</button></td>
                    <td><button class="btn btn-danger" onclick="deletproduct(`+ i + `)" >delete</button></td>
                    </tr>`
    }

    document.getElementById("tableBody").innerHTML = temp}



function deletproduct(index){
    productlist.splice(index,1);
    console.log(productlist);
    display()
    localStorage.setItem("productlist", JSON.stringify(productlist))

}
function clearForm(){
    nameInput.value=""
    priceInput.value=""
    categoryInput.value="tv"
    descriptionInput.value=""
}
function search(){
    var searchvalue=searchInput.value.toLowerCase()
    var temp = ""
    for (var i = 0; i < productlist.length; i++) {
    if(productlist[i].name.toLowerCase().includes(searchvalue)==true ||productlist[i].categ.toLowerCase().includes(searchvalue)==true){
        temp += `<tr>
                    <td>`+ i + `</td>
                    <td>`+ productlist[i].name.toLowerCase().replace(searchvalue,"<span class='fw-bold text-danger'>"+searchvalue+"</span>")+ `</td>
                    <td>`+ productlist[i].price + `</td>
                    <td>`+ productlist[i].categ.toLowerCase().replace(searchvalue,"<span class='fw-bold text-danger'>"+searchvalue+"</span>") + `</td>
                    <td>`+ productlist[i].desc + `</td>
                    <td><button class="btn btn-warning">Update</button></td>
                    <td><button class="btn btn-danger" onclick="deletproduct(`+ i + `)" >delete</button></td>
                    </tr>`
    }

    document.getElementById("tableBody").innerHTML = temp}  
}
function updateProduct(inde){
 currentindex=inde
console.log(inde);
console.log(productlist);
 nameInput.value=productlist[inde].name
 priceInput.value=productlist[inde].price
 categoryInput.value=productlist[inde].categ
 descriptionInput.value=productlist[inde].desc
 document.getElementById("addproduct").style.display= "none"
 document.getElementById("addedit").style.display= "inline-block"
 
}
function addEdit(){
    productlist[currentindex].name=nameInput.value
    productlist[currentindex].price=priceInput.value
    productlist[currentindex].categ=categoryInput.value
    productlist[currentindex].desc=descriptionInput.value

    display()
    localStorage.setItem("productlist", JSON.stringify(productlist))
    document.getElementById("addproduct").style.display= "inline-block"
    document.getElementById("addedit").style.display= "none"
    clearForm()

}
// nameInput.addEventListener("blur",function(){
// let reg=/^[A-Z][a-z]{3,10}[0-9]?$/
// if(reg.test(nameInput.value)==true){
//     alertName.classList.replace("d-block","d-none")
//     nameInput.classList.add("is-valid")
//     nameInput.classList.remove("is-invalid")
// }
// else{
// alertName.classList.replace("d-none","d-block")
// nameInput.classList.add("is-invalid")
// nameInput.classList.remove("is-valid")

// }
// })
// priceInput.addEventListener("blur",function(){}
// let reg=/^[1-9][0-9]{1,4}$/
// if(reg.test(priceInput.value)==true){
//     alertPrice.classList.replace("d-block","d-none")
//     priceInput.classList.add("is-valid")
//     priceInput.classList.remove("is-invalid")
// }
// else{
// alertPrice.classList.replace("d-none","d-block")
// priceInput.classList.add("is-invalid")
// priceInput.classList.remove("is-valid")

  
    nameInput.addEventListener("blur",validName)

    function validName(){
        let reg=/^[A-Z][a-z]{3,10}[0-9]?$/
        if(reg.test(nameInput.value)==true){
            alertName.classList.replace("d-block","d-none")
            nameInput.classList.add("is-valid")
            nameInput.classList.remove("is-invalid")
            return true
        }
        else{
        alertName.classList.replace("d-none","d-block")
        nameInput.classList.add("is-invalid")
        nameInput.classList.remove("is-valid")
        return false
        }}


        priceInput.addEventListener("blur",validPrice)
        function validPrice(){
            let reg=/^[1-9][0-9]{1,4}$/
            if(reg.test(priceInput.value)==true){
                alertPrice.classList.replace("d-block","d-none")
                priceInput.classList.add("is-valid")
                priceInput.classList.remove("is-invalid")
                return true
            }
            else{
            alertPrice.classList.replace("d-none","d-block")
            priceInput.classList.add("is-invalid")
            priceInput.classList.remove("is-valid")
            return false
            
            }
            } 
           descriptionInput.addEventListener("blur",validDescrpition)
            function validDescrpition(){
                    let reg=/^[A-Z][a-z]{1,10}$/
                    if(reg.test(descriptionInput.value)==true){
                        alertDescription.classList.replace("d-block","d-none")
                       descriptionInput.classList.add("is-valid")
                        descriptionInput.classList.remove("is-invalid")
                        return true
                    }
                    else{
                    alertDescription.classList.replace("d-none","d-block")
                   descriptionInput.classList.add("is-invalid")
                    descriptionInput.classList.remove("is-valid")
                    return false
                    
                    }
                    } 
            
        