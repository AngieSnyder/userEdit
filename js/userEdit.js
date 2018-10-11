var url = "http://localhost:8080/Users/";

$().ready(() => {
    
    $("#getuser").click(() => {
        getUserByPrimaryKey($("#userid").val());
    });
    $("#save").click(() => {
        updateUser();
    });
});

function updateUser() {
    var id = $("#pid").val();
    var userName = $("#puserName").val();
    var password = $("#ppassword").val();
    var firstName = $("#pfirstName").val();
    var lastName = $("#plastName").val();
    var phoneNumber = $("#pphoneNumber").val();
    var email = $("#pemail").val();
    var reviewer = $("#previewer").val();
    var admin = $("#padmin").val();

    var user = {
        id: id,
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        reviewer: reviewer == 'on' ? true: false,
        admin: admin == 'on' ? true: false,
    }
    $.post(url+"Change", user)
        .then((resp)=>{
            console.log(resp);
        });
}
function getUserByPrimaryKey(id){
    console.log("getUserByPrimaryKey()");
    $.getJSON(url + "Get/" + id)
        .then((resp) => {
            render(resp.data);
        });
}

function render(user) {
    $("#pid").val(user.id);
    $("#pfirstName").val(user.firstName);
    $("#plastName").val(user.lastName);
    $("#puserName").val(user.userName);
    $("#ppassword").val(user.password);
    $("#pphoneNumber").val(user.phoneNumber);
    $("#pemail").val(user.email);
    $("#previewer").prop("checked", user.reviewer);
    $("#padmin").prop("checked", user.admin);

}