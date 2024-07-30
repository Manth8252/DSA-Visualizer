import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SortingVisualizerComponent } from './sorting-visualizer/sorting-visualizer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SortingVisualizerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sorting-visualizer';
  selectedAlgorithm: string = 'bubble'; // Default algorithm

  @ViewChild(SortingVisualizerComponent) sortingVisualizer!: SortingVisualizerComponent;

  setAlgorithm(algorithm: string) {
    this.selectedAlgorithm = algorithm;
    if (this.sortingVisualizer) {
      this.sortingVisualizer.algorithm = this.selectedAlgorithm; // Pass the selected algorithm
    }
  }
}
