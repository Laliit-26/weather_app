
const list = document.querySelector(".list");
const input = document.querySelector(".ip");
const btn = document.querySelector("#btn");

console.log(list, input.innerHTML.toString(), btn)

const callfetch= (loc)=> {
    // console.log(loc);
  fetch(
    `http://api.weatherstack.com/current?access_key=9fcafcbd2b40e39e1bae148b62f3875a&query=${loc}`
  )
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.current.temperature);
      list.innerHTML = `<li class="temp"> ${data.current.temperature}' </li>
        <li class="city"> ${data.request.query}</li>
       
       `
    })
}
callfetch("Delhi");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    callfetch(input.value);
    input.value = '';

});
