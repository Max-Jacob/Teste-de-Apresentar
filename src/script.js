$(document).ready(() => {
    $('.nav-toggle').on('click', () => {
        $('#navbar ul').slideToggle("medium");
    });

    $("#contact-form").on("submit", function(event) {
        event.preventDefault();
        alert("Formulário enviado com sucesso")
    })

    const FormData = {
        name: $("#name").val(),
        email: $("#email").val(),
        assunto: $("#assunto").val(),
        message: $("#message").val()
    }

    console.log(FormData);

    // $.ajax({
    //     type: "POST",
    //     url: "endereço back-end",
    //     data: FormData,
    //     sucesso: function() {
    //         console.log("Deu certo")
    // })
    // error: function() {
    //     console.error("Deu erro")
    // }    


});