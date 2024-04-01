export { counter };

class counter {
    constructor () {
    this.deadCounter = parseInt(document.getElementById('dead').textContent);
    this.lostCounter = parseInt(document.getElementById('lost').textContent);
    this.hole = document.getElementsByClassName('hole');
}

handleEvent() {
    document.addEventListener('click', function(event) {

        let clickHole = document.getElementById(`${event.target.id}`);

        if (clickHole.classList.contains( 'hole_has-mole' )) {
            deadCounter += 1;
            dead.textContent = (`${deadCounter}`);
        } else {
            lostCounter +=1;
            lost.textContent = (`${lostCounter}`);
        }
        if (deadCounter == 10 || lostCounter == 5) {
            checkStatus();
            deadCounter = 0;
            lostCounter = 0;
            dead.textContent = `${deadCounter}`;
            lost.textContent = `${lostCounter}`;
        }
})}

checkStatus() {
    if (this.deadCounter === 10) {
        alert(`Победа!`);
    } else if (this.lostCounter === 5) {
        alert(`Вы проиграли`);
    }
}

  }


