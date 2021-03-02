var activePlayer;
//тоглогчидын цуглуулсан оноог хадгалдаг хувьсагч
// togloom duussan esehiin tuluwiin huwisagch
var isNewGame;

var scores;
// Тоглогчийн  ээлжиндээ цуглуулж байгаа оноог  хадгалах хувьсагч
var roundScore;

var diceDom = document.querySelector(".dice");
initGame();

// Шоог шидэх eventlistener
document.querySelector(".btn-roll").addEventListener('click',function(){

    if(isNewGame){
        //1-6 Доторх санамсаргүй тоог гаргаж авна.
    var diceNumber= Math.floor(Math.random()*6) + 1;
    // шооны зургийг гаргана
    diceDom.style.display = "block";
    // буусан шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.src = 'dice-' + diceNumber + '.png';
    // буусан тоо  1-ээс  ялгаатай бол  идэвхитэй тоглогчийн оноог нэмэгдүүлнэ
    if(diceNumber !== 1){
        //1-ээс ялгаатай тоо буулаа тоглогчийн оноог нэмэгдүүлнэ
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{
// 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө
// энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно
switchToNextPlayer();

    }
    }else{
        alert('Тоглоом дууссан байна "New Game" товч дээр дарж эхлүүлнэ үү.')
    }
});

// Hold товчны event listner
document.querySelector('.btn-hold').addEventListener("click", function(){
if(isNewGame){
    
scores[activePlayer] = scores[activePlayer] + roundScore;

document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
// Уг тоглогч хожсон эсэхийг шалгах (оноо нь 100)
if(scores[activePlayer]>= 10){
    isNewGame = false;
    //ялагч гэсэн текстийг нэрний оронд гаргана
    document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";
    document.querySelector('.player-' + activePlayer + '-panel').classList.add("winner");
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove
    ("active");
}else{
    switchToNextPlayer();
}
}else{
    alert('Тоглоом дууссан байна "New Game" товч дээр дарж эхлүүлнэ үү.')
}
});

// энэ функц нь ээлжийг сольдог
function switchToNextPlayer(){
    // eejliinn onoog 0 bolgono
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    //улаан цэгийг шилжүүлэх
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
    
    // shoog tur alga bolgono
    
    diceDom.style.display = "none";
}
// hew button event listner

document.querySelector('.btn-new').addEventListener('click', function(){
    initGame();
});
function initGame(){
    // тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0ь 2-р тоглогчийг 1 гэж тэмдэглье.

   isNewGame = true;

activePlayer = 0;
//тоглогчидын цуглуулсан оноог хадгалдаг хувьсагч
scores = [0,0 ];
// Тоглогчийн  ээлжиндээ цуглуулж байгаа оноог  хадгалах хувьсагч
roundScore = 0;
// Тоглолт эхлэхэд бэлдье
document.getElementById("score-0").textContent = '0';
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//toglogchdiin neriig butsaaj gargah
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
diceDom.style.display = "none";
}