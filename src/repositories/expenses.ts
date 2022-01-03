const expenses = [
  { "description": "Energia elétrica", "amount": "150.55", "type": "saída", "frequency": "recorrente", "date": "2022-01-10" },
  { "description": "Água", "amount": "75.55", "type": "saída", "frequency": "recorrente", "date": "2022-01-15" },
  { "description": "Telefone", "amount": "99.99", "type": "saída", "frequency": "recorrente", "date": "2022-01-23" },
  { "description": "Plano de Saúde", "amount": "300.00", "type": "saída", "frequency": "recorrente", "date": "2022-01-23" },
  { "description": "Compras do mês", "amount": "625.78", "type": "saída", "frequency": "recorrente", "date": "2022-01-23" },
  { "description": "Lanche", "amount": "45.70", "type": "saída", "frequency": "eventual", "date": "2022-01-23" },
  { "description": "Blusa", "amount": "95.70", "type": "saída", "frequency": "eventual", "date": "2022-01-23" },
  { "description": "Energia elétrica", "amount": "125.55", "type": "saída", "frequency": "recorrente", "date": "2022-02-10" },
  { "description": "Água", "amount": "90.15", "type": "saída", "frequency": "recorrente", "date": "2022-02-15" },
  { "description": "Telefone", "amount": "99.99", "type": "saída", "frequency": "recorrente", "date": "2022-02-23" },
  { "description": "Plano de Saúde", "amount": "300.00", "type": "saída", "frequency": "recorrente", "date": "2022-02-23" },
  { "description": "Compras do mês", "amount": "540.00", "type": "saída", "frequency": "recorrente", "date": "2022-02-25" },
  { "description": "Parcela do Celular 1/5", "amount": "150.99", "type": "saída", "frequency": "eventual", "date": "2022-02-26" },
  { "description": "Cinema", "amount": "45.00", "type": "saída", "frequency": "eventual", "date": "2022-02-23" },
  { "description": "Energia elétrica", "amount": "97.00", "type": "saída", "frequency": "recorrente", "date": "2022-03-10" },
  { "description": "Água", "amount": "100.10", "type": "saída", "frequency": "recorrente", "date": "2022-03-15" },
  { "description": "Telefone", "amount": "99.99", "type": "saída", "frequency": "recorrente", "date": "2022-03-23" },
  { "description": "Plano de Saúde", "amount": "300.00", "type": "saída", "frequency": "recorrente", "date": "2022-03-23" },
  { "description": "Compras do mês", "amount": "800.50", "type": "saída", "frequency": "recorrente", "date": "2022-03-17" },
  { "description": "Parcela do Celular 2/5", "amount": "150.99", "type": "saída", "frequency": "eventual", "date": "2022-03-18" },
  { "description": "Troca de Oléo do carro", "amount": "90.00", "type": "saída", "frequency": "eventual", "date": "2022-03-23" },
  { "description": "Energia elétrica", "amount": "75.99", "type": "saída", "frequency": "recorrente", "date": "2022-04-10" },
  { "description": "Água", "amount": "80.33", "type": "saída", "frequency": "recorrente", "date": "2022-12-15" },
  { "description": "Telefone", "amount": "99.99", "type": "saída", "frequency": "recorrente", "date": "2022-04-23" },
  { "description": "Plano de Saúde", "amount": "300.00", "type": "saída", "frequency": "recorrente", "date": "2022-04-23" },
  { "description": "Compras do mês", "amount": "600.00", "type": "saída", "frequency": "recorrente", "date": "2022-04-25" },
  { "description": "Parcela do Celular 3/5", "amount": "150.99", "type": "saída", "frequency": "eventual", "date": "2022-04-26" },
  { "description": "Ebook de React Js", "amount": "85.95", "type": "saída", "frequency": "eventual", "date": "2022-04-13" },
  { "description": "Energia elétrica", "amount": "125.55", "type": "saída", "frequency": "recorrente", "date": "2022-05-10" },
  { "description": "Água", "amount": "90.15", "type": "saída", "frequency": "recorrente", "date": "2022-05-15" },
  { "description": "Telefone", "amount": "99.99", "type": "saída", "frequency": "recorrente", "date": "2021-05-23" },
  { "description": "Plano de Saúde", "amount": "300.00", "type": "saída", "frequency": "recorrente", "date": "2022-05-23" },
  { "description": "Compras do mês", "amount": "540.00", "type": "saída", "frequency": "recorrente", "date": "2022-05-25" },
  { "description": "Parcela do Celular 4/5", "amount": "150.99", "type": "saída", "frequency": "eventual", "date": "2022-05-26" },
  { "description": "Blusa Iron Man", "amount": "150.00", "type": "saída", "frequency": "eventual", "date": "2022-01-23" },
  { "description": "Energia elétrica", "amount": "200.00", "type": "saída", "frequency": "recorrente", "date": "2022-06-10" },
  { "description": "Água", "amount": "150.00", "type": "saída", "frequency": "recorrente", "date": "2022-06-15" },
  { "description": "Telefone", "amount": "99.99", "type": "saída", "frequency": "recorrente", "date": "2022-06-23" },
  { "description": "Plano de Saúde", "amount": "300.00", "type": "saída", "frequency": "recorrente", "date": "2022-06-23" },
  { "description": "Compras do mês", "amount": "559.15", "type": "saída", "frequency": "recorrente", "date": "2022-06-25" },
  { "description": "Parcela do Celular 5/5", "amount": "150.99", "type": "saída", "frequency": "eventual", "date": "2022-06-26" },
  { "description": "Perfume", "amount": "250.00", "type": "saída", "frequency": "eventual", "date": "2022-06-21" },
  { "description": "Energia elétrica", "amount": "250.00", "type": "saída", "frequency": "recorrente", "date": "2022-07-10" },
  { "description": "Água", "amount": "90.00", "type": "saída", "frequency": "recorrente", "date": "2022-07-15" },
  { "description": "Telefone", "amount": "99.99", "type": "saída", "frequency": "recorrente", "date": "2022-07-23" },
  { "description": "Plano de Saúde", "amount": "300.00", "type": "saída", "frequency": "recorrente", "date": "2022-07-23" },
  { "description": "Compras do mês", "amount": "700.00", "type": "saída", "frequency": "recorrente", "date": "2022-07-25" },
  { "description": "Cafeteira", "amount": "250.00", "type": "saída", "frequency": "eventual", "date": "2022-07-26" },
  { "description": "Pizza", "amount": "60.00", "type": "saída", "frequency": "eventual", "date": "2022-07-19" }
]

export default expenses;