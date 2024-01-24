import {generarCarta} from './motor';

  describe('generarCarta', () => {
    it("Generar carta deberia devolver 12 cuando el numero es 10", () => {
      // Arrange
        const numero = 10;
        const valorEsperado = 12;
      // Act
        const carta = generarCarta(numero);
  
      // Assert
      expect(carta).toBe(valorEsperado);
    });

    it("Generar carta deberia devolver 7 cuando el numero es 10", () => {
      // Arrange
        const numero = 7;
        const valorEsperado = 7;
      // Act
        const carta = generarCarta(numero);
  
      // Assert
      expect(carta).toBe(valorEsperado);
    });

    it("Generar carta deberia devolver 1 cuando el numero es 0", () => {
      // Arrange
        const numero = 0;
        const valorEsperado = 1;
      // Act
        const carta = generarCarta(numero);
  
      // Assert
      expect(carta).toBe(valorEsperado);
    });

    it("Generar carta deberia devolver 4 cuando el numero es 4", () => {
      // Arrange
        const numero = 4;
        const valorEsperado = 4;
      // Act
        const carta = generarCarta(numero);
  
      // Assert
      expect(carta).toBe(valorEsperado);
    });
  });

  