import { vi } from 'vitest';
import { generarCarta, devolverMensajePlantarse } from './motor';
import { puntos } from './model';

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




  describe('devolverMensajePlantarse', () => {
    it("Cuando tu puntuacion es 7.5 deberia devolver ¡Lo has clavado! ¡Enhorabuena!", () => {
      // Arrange
      const valorEsperado: string = "¡Lo has clavado! ¡Enhorabuena!";
      vi.spyOn(puntos, "puntuacion", "get").mockReturnValue(7.5);

      // Act
      const valor = devolverMensajePlantarse();

      // Assert
      expect(valor).toBe(valorEsperado);
    });

    it("Cuando tu puntuacion es 14 deberia devolver Game Over", () => {
      // Arrange
      const valorEsperado: string = "Game Over";
      vi.spyOn(puntos, "puntuacion", "get").mockReturnValue(14);

      // Act
      const valor = devolverMensajePlantarse();

      // Assert
      expect(valor).toBe(valorEsperado);
    });

    it("Cuando tu puntuacion es 5.5 deberia devolver Te ha entrado el canguelo eh?", () => {
      // Arrange
      const valorEsperado: string = "Te ha entrado el canguelo eh?";
      vi.spyOn(puntos, "puntuacion", "get").mockReturnValue(5.5);

      // Act
      const valor = devolverMensajePlantarse();

      // Assert
      expect(valor).toBe(valorEsperado);
    });

    it("Cuando tu puntuacion es 7 deberia devolver Casi casi...", () => {
      // Arrange
      const valorEsperado: string = "Casi casi...";
      vi.spyOn(puntos, "puntuacion", "get").mockReturnValue(7);

      // Act
      const valor = devolverMensajePlantarse();

      // Assert
      expect(valor).toBe(valorEsperado);
    });

  });

  