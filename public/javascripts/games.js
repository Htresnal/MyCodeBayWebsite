var answer=0;
var started=5;
function game_Guess()
{
    var logWindowID=document.getElementById("game_zone_guess_Log");
    var tmpBuffer=(" ");
    var logBuffer=("");
    inputStr=document.getElementById('userAnswerGuess').value;
    var userAnswer=parseInt(inputStr);
    if (started>=1 && answer!=101)
    {
        started--;
        if(userAnswer>answer)
        {
            logBuffer=(logBuffer+"Много.<br><br>Осталось попыток:"+started+"<br>");
            logWindowID.innerHTML=(logBuffer);

        }
        else if(userAnswer<answer)
        {
            logBuffer=(logBuffer+"Мало.<br><br>Осталось попыток:"+started+"<br>");
            logWindowID.innerHTML=(logBuffer);
        }
        else if(userAnswer==answer)
        {
            logBuffer=(logBuffer+"<br>Молодец! Победа!"+"<br>");
            answer=101;
            logWindowID.innerHTML=(logBuffer);
        };
        if (started==0 && answer!=101)
        {
            logBuffer=(logBuffer+"<br>Количество ходов иссякло. Загаданное число: "+answer+"<br>");
            logWindowID.innerHTML=(logBuffer);
        };
    }
    else
    {
        answer=parseInt(Math.random()*100);
        logWindowID.innerHTML=(logBuffer);
        started=5;
    };
return false;
}

var answerD=0;
var startedD=10;
var player=0;
function game_GuessMultiplayer()
{
    var logWindowID=document.getElementById("game_zone_guessMultiplayer_Log");
    var logBuffer=("");
    var tmpBuffer=(" ");
    inputStr=document.getElementById('userAnswerGuessMultiplayer').value;
    var userAnswer=parseInt(inputStr);
    if (startedD>=1 && answerD!=101)
    {
        startedD--;
        if(userAnswer>answerD)
        {
            player = player==1 ? 0 : 1;
            logBuffer=(logBuffer+"Много.<br>Следующий ход за игроком "+(player+1).toString()+"<br><br>Осталось попыток:"+(startedD-10+(10-Math.floor(startedD/2)-player)).toString()+"<br>");
            logWindowID.innerHTML=(logBuffer);

        }
        else if(userAnswer<answerD)
        {
            player = player==1 ? 0 : 1;
            logBuffer=(logBuffer+"Мало.<br>Следующий ход за игроком "+(player+1).toString()+"<br><br>Осталось попыток:"+(startedD-10+(10-Math.floor(startedD/2)-player)).toString()+"<br>");
            logWindowID.innerHTML=(logBuffer);
        }
        else if(userAnswer==answerD)
        {
            logBuffer=(logBuffer+"Победа! Поздравляем, игрок "+(player+1).toString()+"!");
            answerD=101;
            logWindowID.innerHTML=(logBuffer);
        };
        if (startedD==0 && answerD!=101)
        {
            logBuffer=(logBuffer+"<br>Количество ходов иссякло. Загаданное число: "+answerD+"<br>");
            logWindowID.innerHTML=(logBuffer);
        };
    }
    else
    {
        answerD=parseInt(Math.random()*100);
        logWindowID.innerHTML=(logBuffer);
        startedD=10;
    };
return false;
}

function sendDataRiddles()
{
    var logWindowID=document.getElementById("game_zone_riddles_Log");
    var logBuffer=(" ");
    var input=document.getElementById('riddle0');
    if (document.getElementById('riddle0').value.length==0 && document.getElementById('riddle1').value.length==0 && document.getElementById('riddle2').value.length==0 && document.getElementById('riddle3').value.length==0)
    {
        logBuffer=logBuffer+"<br>Пожалуйста, введите хотя-бы одно значение! ಠ_ಠ<br>"
        logWindowID.innerHTML=(logBuffer);
    return false;
    };
    var riddlesAnswered=0
    var endLine="Твой счёт:"
    var finals = [
    "¬_¬ Не хочешь, ну и ладно...",
    "(;´༎ຶД༎ຶ`) Не переживай, в следующий раз точно получится!",
    "Хорошая работа! вот тебе за старание милый котик:<br>&nbsp/\\_/\\<br>( o.o )<br>&nbsp> ^ <",
    "(☞ﾟ∀ﾟ)☞ Ай красавчик! Вот тебе [̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]"
    ];
    
    inputStr=document.getElementById('riddle0').value;
    if (inputStr.toUpperCase()=="ЗАПАСНОЕ" || inputStr.toUpperCase()=="ЗАПАСКА")
    {
        riddlesAnswered=riddlesAnswered+1
    };
    
    inputStr=document.getElementById('riddle1').value;
    if (inputStr.toUpperCase()=="ТРОЛЛЕЙБУС" || inputStr.toUpperCase()=="СИНИЙ ТРАМВАЙ")
    {
        riddlesAnswered=riddlesAnswered+1
    };
    
    inputStr=document.getElementById('riddle2').value;
    if (inputStr.toUpperCase()=="ДОРОГА" || inputStr.toUpperCase()=="АСФАЛЬТ" || inputStr.toUpperCase()=="ТРОПА" || inputStr.toUpperCase()=="ПУТЬ")
    {
        riddlesAnswered=riddlesAnswered+1
    };
    
    inputStr=document.getElementById('riddle3').value;
    if (inputStr.toUpperCase()=="МОПЕД")
    {
        riddlesAnswered=riddlesAnswered+1
    };
    
    if (riddlesAnswered==0)
    {
        logBuffer=logBuffer+("<br>"+endLine+riddlesAnswered+"<br><br>"+finals[0]);
        logWindowID.innerHTML=(logBuffer);
    }
    else if (riddlesAnswered<=2)
    {
        logBuffer=logBuffer+("<br>"+endLine+riddlesAnswered+"<br><br>"+finals[1]);
        logWindowID.innerHTML=(logBuffer);
    }
    else if (riddlesAnswered==3)
    {
        logBuffer=logBuffer+("<br>"+endLine+riddlesAnswered+"<br><br>"+finals[2]);
        logWindowID.innerHTML=(logBuffer);
    }
    else if (riddlesAnswered==4)
    {
        logBuffer=logBuffer+("<br>"+endLine+riddlesAnswered+"<br><br>"+finals[3]);
        logWindowID.innerHTML=(logBuffer);
    };
return false;
}