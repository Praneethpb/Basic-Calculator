

var screen =document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

// getting the value of btn, Here we use for loop
for(item of btn)
{
    item.addEventListener('click', (x)=>{
        let btnText = x.target.innerText;
        screen.value += btnText;
    });
}


// Sin function
function sin()
{
    screen.value = Math.sin(screen.value);
}

// Cos Function
function cos()
{
    screen.value = Math.cos(screen.value);
}

// Tan Function
function tan()
{
    screen.value = Math.tan(screen.value);
}

// Power Function
function pow()
{
    screen.value = Math.pow(screen.value, 2);
}

// sqrt Function
function sqrt()
{
    screen.value = Math.sqrt(screen.value, 2);
}

// Tan Function
function tan()
{
    screen.value = Math.tan(screen.value);
}

// log Function
function log()
{
    screen.value = Math.log(screen.value);
}

// PI
function pi()
{
    screen.value += Math.PI;
}


// E
function e()
{
    screen.value += Math.E;
}


// factorial
function fact()
{
    let i, num, ans;
    ans = 1;
    num = screen.value;

    // for(i = 1; i<= num; i++)
    // {
    //     ans = ans * i;
    // }

    // i=i-1;


    while(num!=0)
    {
        ans = ans * num;
        num--;
    }

    screen.value = ans;
}


// backspace
function backspace()
{
    screen.value = screen.value.substr(0, screen.value.length-1);
}


// All Clear - AC function
function ac()
{
    screen.value = '';
}


