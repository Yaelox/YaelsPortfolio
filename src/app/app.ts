import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";
import { Portafolio } from "./pages/portafolio/portafolio";
import { About } from "./pages/about/about";
import { PortfolioItem } from "./pages/portfolio-item/portfolio-item";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Portafolio, About, PortfolioItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CursoAngular');
}
