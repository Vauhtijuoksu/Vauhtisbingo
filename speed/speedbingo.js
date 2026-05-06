let username
let bstate

const year = "2026"
$(document).ready(function(){
    username = localStorage.getItem('username-' + year );
    bstate = JSON.parse(localStorage.getItem('state-' + year ));
    if (username){
        seed_spot = stringToNumber(username) + seed
        set_nametext(username)
        if (!bstate){
            init_state()
        }
        if (bstate.hasOwnProperty("board")){
            if ( bstate["board"].hasOwnProperty(username)){
                unlocks = bstate["board"][username]
            }
            else {
                init_user_state()
            }
        }
        else {
            init_state()
        }
        generate()
    } else {
        window.location.href = "index.html";
    }
    $(".board-cell").on( "click", function() {
        $(this).toggleClass("unlocked")

        var classList = $(this).attr('class').split(/\s+/);
        let row
        let cell
        $.each(classList, function(index, item) {
            if (item.split("-")[0] === "r") {
                row = parseInt(item.split("-")[1])
            }
            if (item.split("-")[0] === "c") {
                cell = parseInt(item.split("-")[1])
            }
        });
        if (unlocks[row][cell]) {
            unlocks[row][cell] = false
        } else {
            unlocks[row][cell] = true
        }
        bstate["board"][username] = unlocks
        localStorage.setItem('state-' + year , JSON.stringify(bstate));
    });
});

function init_state(){
    bstate = {"board": {}}
    init_user_state()
}

function init_user_state(){
    bstate["board"][username] = unlocks
    localStorage.setItem('state-' + year, JSON.stringify(bstate));
}


let unlocks = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
]
const numbers = 75

function stringToNumber(str){
  let num = 0
  for (let i = 0; i < str.length; i++){
    num += str.charCodeAt(i) * ((i+1) % 3) * 10.1 + str.charCodeAt(i) * 24.3 + i*99.3
  }
  return Math.round(num)
}

// Damage boost
var seed = 4622885;

var seed_spot = 0
function random() {

    var x = Math.sin(seed + seed_spot) * 100.0;
    seed += 1
    return x - Math.floor(x);
}

function set_nametext(s){
    html = ""
    for (var c = 0; c < s.length; c++){
        html += "<div>"
        html += s.charAt(c)
        html += "</div>"
    }
    $("#username").html(html)

}

function generate(){
    let html = ""
    let choises = []
    let num = 0
    for (let i = 0; i < 5; i ++) {
        let pool = []
        for (let j = 0; j < numbers/5; j ++) {
            num += 1
            pool.push(num)
        }
        choises.push(pool)
    }
    console.log(choises)

    for (var row = 0; row < 5; row ++){
        html += "<div class='board-row'>"
        for (var cell = 0; cell < 5; cell ++) {
            let unlocked = ""
            if (unlocks[row][cell]){
                unlocked = "unlocked"
            }
            html += "<div class='board-cell r-" + row + " c-" + cell + " "+ unlocked +"'><div class='cell speed'><div>"
            let rnum = random()
            while (rnum === 1) {
                rnum = random()
            }
            rnum = Math.floor( choises[cell].length * rnum)
            let cell_text = choises[cell][rnum]
            choises[cell].splice(rnum, 1)
            if (row === 2 && cell === 2){
                cell_text = 'FREE'
            }
            html += cell_text
            html += "</div></div></div>"
        }
        html += "</div>"
    }
    $("#board").html(html)
}