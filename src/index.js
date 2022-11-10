// Your code here
console.log("connected")

const sideMenu = document.getElementById("side-menu")
const filmTitle = document.getElementById("title")
const filmPoster = document.getElementById("film-poster")
const filmRuntime = document.getElementById("runtime")
const filmShowtime = document.getElementById("showtime")
const filmTickets = document.getElementById("ticket-num")
const filmInfo = document.getElementById("film-info")
// filmTitle = "The Giant Gila Monster"
// filmPoster = "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
// filmRuntime = "108"
// filmShowtime = "04:00PM"
// filmTickets = "3"
const list = document.getElementById("list")

const request = async () => {
    let req = await fetch("http://localhost:3000/films/")
    let res = await req.json()

    res.forEach((movie) => {
        let li = document.createElement("li")
        li.innerText = movie.title
        list.append(li)
        sideMenu.append(list)

           
    })
    
    
}
request()

const movieReq = async () => {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()


    let capacity = movie.capacity
    let sold = movie.tickets_sold
    
    filmTitle.innerText = movie.title
    filmInfo.innerText = movie.description
    filmRuntime.innerText = movie.runtime
    filmShowtime.innerText = movie.showtime
    filmTickets.innertext = capacity - sold


}