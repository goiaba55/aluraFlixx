//var filme1 = "scoby doo"
//var filme2 = "mad max"

//var filmes = ["mulher maravilha", "mad max", "Bumblebee", "scoby doo"] //serve para juntar varias variaveis

//filmes.push("mad max") //empurra para dentro da variação filmes

//console.log(filmes[0])

//var tentativas = 3


//for (var i = 0; i > filmes.length; i--)

//for criou uma variavel, fez o loop, e diminuiu -1 da variavel

var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var nomes = ["Mad Max", "Mulher maravilha", "DeadPool"]

var trailers = ["https://www.imdb.com/video/vi3047862297?playlistId=tt1392190&ref_=tt_ov_vi", "https://www.imdb.com/video/vi3944268057?playlistId=tt0451279&ref_=tt_ov_vi", "https://www.imdb.com/video/vi567457049?playlistId=tt1431045&ref_=tt_ov_vi" ]

for (var i = 0; i < listaFilmes.length; i++){
  document.write("<div id='imagem'>")
  document.write("<h2>" + nomes[i] + "</h2>")
  document.write("<a href=" + trailers[i] + ">")
  document.write("<img src=" + listaFilmes[i] + ">")
  document.write("</a>")
  document.write("</div>")




  //document.write("<a href=" + trailers[i] + "target=_blanc ><div class='filme_imagem'>" + "<img src=" + listaFilmes[i] + ">" + "</div>")
 //document.write("<a href=" + trailers[i] + "target='_blank'>")
}