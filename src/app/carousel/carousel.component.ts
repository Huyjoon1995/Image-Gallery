import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from '../image.service';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  /**
   * Image Subscription
   */
  private _imageSubscription: Subscription;
  
  /**
   * List of image
   */
  images: Image[];

  /**
   * current index of the slide show
   */
  slideIndex: number = 0;

  constructor(private _imageService: ImageService) { }

  ngOnInit() {
    this.getListOfImage();
  }

  ngOnDestroy() {
    this._imageSubscription.unsubscribe();
  }

  /**
   * Fetch the list of images from the service
   */
  getListOfImage() {
    if(localStorage.getItem('images')) {
      this.images = JSON.parse(localStorage.getItem('images'));
    }

    this._imageSubscription = this._imageService.getListOfImages().subscribe((res: Image[]) => {
      this.images = res;
      localStorage.setItem('images', JSON.stringify(this.images));
    });  
    
  }

  /**
   * Open the current slide show
   */
  open() {
    document.getElementById('imgModal').style.display = 'flex';
  }

  /**
   * Close the current slide show
   */
  close() {
    document.getElementById('imgModal').style.display = 'none';
  }

  /**
   * When user clicks on the current image it will show the slideshow of the image
   * @param i : current index of the image being clicked
   */
  currentSlide(i: number) {
    this.showSlides(this.slideIndex = i); 
  }

  /**
   * Move forward or backward 
   * @param i : current value
   */
  moveSlides(i: number) {
    this.showSlides(this.slideIndex += i);
  }

  /**
   * Show the slide show
   * @param n : current index of the image
   */
  showSlides(n: number) {
    const slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf<HTMLElement>;
    
    if (n > slides.length) {
      this.slideIndex = 1
    }
    
    if (n < 1) {
      this.slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[this.slideIndex - 1].style.display = "flex";
    
  }
}
