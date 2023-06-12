function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }
  
  for (let i = 1; i <= 10; i++) {
    console.log(`O fatorial de ${i} é ${calcularFatorial(i)}`);
  }