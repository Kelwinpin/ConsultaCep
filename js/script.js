function consultar(){
   var cep = document.getElementById("CEP").value;
   var url = "https://viacep.com.br/ws/"+ cep +"/json/";

   console.log(url);

   $.ajax({
      url: url,
      type:"GET",
      success: function(response){
            $("#uf").html(response.uf);
            $("#bairro").html(response.bairro);
            $("#logradouro").html(response.logradouro);
            $("#localidade").html(response.localidade);
            $("#cep").show();
      }
   })
}   

$(function(){
      $("#cep").hide();
   })