function toggleVisibility(toggleTarget)
{
    var e = document.getElementById(toggleTarget);
    if(e.style.display == 'block')
    {
        e.style.display = 'none';
    }
    else
    {
        e.style.display = 'block';
    };
return false;
}