function valpw(pw) 
{
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
 
  if (regex.test(pw)) {

    return "senha correta";
 }
 else {

    return "senha não atende aos requisitos"
 }
}