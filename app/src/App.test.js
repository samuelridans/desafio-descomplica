import { render, screen } from '@testing-library/react';
import App from './App';

 

test("deve conter a classe logo no componente para exibição do header", () => {
  render(<App />);

  const counterTitle = screen.getByAltText("Descomplica")
  expect(counterTitle).toHaveClass("logo");
});

test("deve conter a classe slogan no componente para exibição do header", () => {
  render(<App />);

  const counterTitle = screen.getByAltText("Aprender é para todo mundo")
  expect(counterTitle).toHaveClass("slogan");
});
