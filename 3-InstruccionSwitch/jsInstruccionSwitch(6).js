var palabritas;
function mostrar()
{ 
var laHora = document.getElementById('hora').value;
laHora = parseInt(laHora);

switch (laHora)
{
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        palabritas = "es de mañana";
    break;

    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        palabritas = "es de tarde";
    break;

    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        palabritas = "es de noche";
    break;

    default:
        palabritas = "No existe esa hora";
    break;
}

alert(palabritas);

}