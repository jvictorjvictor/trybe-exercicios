const service = require("./service");

describe("Exercícios 1 ao 3", () => {
    test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
        service.numeroAleatorio = jest.fn().mockReturnValue(10);
      
        expect(service.numeroAleatorio()).toBe(10);
        expect(service.numeroAleatorio).toHaveBeenCalled();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
      });
      
      test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
        service.numeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
      
        expect(service.numeroAleatorio(20, 5)).toBe(4);
        expect(service.numeroAleatorio).toHaveBeenCalled();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.numeroAleatorio).toHaveBeenCalledWith(20, 5);
      });
      
      test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
          service.numeroAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);
      
          expect(service.numeroAleatorio(2, 3, 4)).toBe(24);
          expect(service.numeroAleatorio).toHaveBeenCalled();
          expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
          expect(service.numeroAleatorio).toHaveBeenCalledWith(2, 3, 4);
      });
      
      test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
          service.numeroAleatorio.mockReset();
          expect(service.numeroAleatorio).toHaveBeenCalledTimes(0);
      
          service.numeroAleatorio.mockImplementation(a => a * 2);
      
          expect(service.numeroAleatorio(5)).toBe(10);
          expect(service.numeroAleatorio).toHaveBeenCalled();
          expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
          expect(service.numeroAleatorio).toHaveBeenCalledWith(5);
        });
});

  describe("Teste de requisição à API", () => {
    service.fetchDog = jest.fn();
    afterEach(service.fetchDog.mockReset);
  
    test("testando requisição caso a promise resolva", async () => {
      service.fetchDog.mockResolvedValue("request success");
  
      service.fetchDog();
      expect(service.fetchDog).toHaveBeenCalled();
      expect(service.fetchDog).toHaveBeenCalledTimes(1);
      await expect(service.fetchDog()).resolves.toBe("request success");
      expect(service.fetchDog).toHaveBeenCalledTimes(2);
    });
  
    test("testando requisição caso a promise seja rejeitada", async () => {
      service.fetchDog.mockRejectedValue("request failed");
  
      expect(service.fetchDog).toHaveBeenCalledTimes(0);
      await expect(service.fetchDog()).rejects.toMatch("request failed");
      expect(service.fetchDog).toHaveBeenCalledTimes(1);
    });
  });