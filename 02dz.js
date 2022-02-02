function converter()
{
    let Bs = prompt('Введіть швидкість передачі даних в байт в секунду');
    let bps =8 * Bs;
    let MBs =0.0000010 * Bs;
    let Mbps =0.0000080 * Bs;

    alert(` Швидкість в біт в секунду: ${bps}`);
    alert(` Швидкість в мегабайт в секунду: ${MBs}`);
    alert(` Швидкість в мегабіт в секунду: ${Mbps}`);
    
    console.log(` Швидкість в біт в секунду: ${bps}`);
    console.log(` Швидкість в мегабайт в секунду: ${MBs}`);
    console.log(` Швидкість в мегабіт в секунду: ${Mbps}`);
}
function Task2(){
    let a = +prompt('Введіть число: ');
    console.log(a);
    if(isNaN(a))
    {
         alert('Ви можете ввести лише число');
         
    }
    else
    {
        if(a == 0){
            alert('Число = 0.');
            console.log('Число = 0.');
        }
        else if(a % 2 == 0){
            alert('Ваше число парне.');;
            console.log('Ваше число парне.');
        }
        else{
            alert('Ваше число не парне.');
            console.log('Ваше число парне.');
        }
    }
    
}