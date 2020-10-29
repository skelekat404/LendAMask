var counter = 0;

function checkInput()
{
    var cq1 = document.getElementById('q1_b').checked;
    var cq2 = document.getElementById('q2_d').checked;
    var cq3 = document.getElementById('q3_a').checked;
    var cq4 = document.getElementById('q4_d').checked;
    var cq5 = document.getElementById('q5_c').checked;

    if(cq1 == true)
    {
        counter++;
        document.getElementById('counter').innerHTML = counter;
    }

    if(cq2 == true)
    {
        counter++;
        document.getElementById('counter').innerHTML = counter;
    }

    if(cq3 == true)
    {
        counter++;
        document.getElementById('counter').innerHTML = counter;
    }

    if(cq4 == true)
    {
        counter++;
        document.getElementById('counter').innerHTML = counter;
    }

    if(cq5 == true)
    {
        counter++;
        document.getElementById('counter').innerHTML = counter;
    }
}

function calculate()
{
    var numOfQuestions = 5;
    if(counter > numOfQuestions)
    {
        counter = numOfQuestions;
    }
    var result = counter + " / 5";
    document.getElementById('result').innerHTML = result;
}