const depositar = (conta, valor) => {
  if (conta.status !== "ativa") throw new Error("Conta inativa");
  if (valor <= 0) throw new Error("Valor inválido");

  conta.saldo += valor;
  conta.atualizadaEm = new Date();
  return conta;
};

const sacar = (conta, valor) => {
  if (conta.status !== "ativa") throw new Error("Conta inativa");

  const saldoDisponivel = conta.saldo + conta.limite;

  if (valor > saldoDisponivel) {
    throw new Error("Saldo insuficiente");
  }

  conta.saldo -= valor;
  conta.atualizadaEm = new Date();
  return conta;
};

describe("Conta", () => {
  let conta;

  beforeEach(() => {
    conta = {
      id: "001",
      titular: "Ugioni",
      saldo: 1000,
      status: "ativa",
      limite: 5000,
      criadaEm: new Date(),
      atualizadaEm: new Date(),
    };
  });

  test("deve depositar corretamente", () => {
    depositar(conta, 500);
    expect(conta.saldo).toBe(1500);
  });

  test("não deve permitir depósito inválido", () => {
    expect(() => depositar(conta, -100)).toThrow();
  });

  test("deve sacar usando saldo + limite", () => {
    sacar(conta, 2000);
    expect(conta.saldo).toBe(-1000);
  });

  test("não deve sacar além do limite", () => {
    expect(() => sacar(conta, 7000)).toThrow();
  });

  test("não deve operar conta bloqueada", () => {
    conta.status = "bloqueada";
    expect(() => depositar(conta, 100)).toThrow();
  });
});