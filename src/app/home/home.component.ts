import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images: string[] = ['assets/Rociowebimgs/Slider/Slider1.jpg','assets/Rociowebimgs/Slider/Slider2.jpg', 'assets/Rociowebimgs/Slider/Slider3.jpg','assets/Rociowebimgs/Slider/Slider4.jpg','assets/Rociowebimgs/Slider/Slider5.jpg','assets/Rociowebimgs/Slider/Slider6.jpg'];
  currentIndex = 0;
  translateValue = 0;

  constructor() { 

  }

  ngOnInit(): void {
  }


  //slider
  prevSlide(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex--;
    }
    this.updateSlider();
  }

  nextSlide(): void {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.updateSlider();
  }

  updateSlider(): void {
    this.translateValue = -100 * this.currentIndex;
  }

  
}
