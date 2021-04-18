import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ImageService } from 'src/app/image.service';
import { Image } from '../models/image.model';
import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let imageService: ImageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ TestHostComponent, CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    imageService = TestBed.get(ImageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a list of image', () => {
    const response: Image[] = [];
    spyOn(imageService, 'getListOfImages').and.returnValue(of(response));
    component.carouselComponent.getListOfImage();
    fixture.detectChanges();
    expect(component.carouselComponent.images).toEqual(response);
  });

  it('should open slide show when image get clicked', () => {
    component.carouselComponent.images = component.images;
    fixture.detectChanges();
    const image = fixture.debugElement.query(By.css('.hover-shadow')).nativeElement;
    image.click();
    expect(document.getElementById('imgModal').style.display).toEqual('flex');
  });

  it('should close the slide show when x button get clicked', () => {
    component.carouselComponent.images = component.images;
    fixture.detectChanges();
    const close = fixture.debugElement.query(By.css('.close')).nativeElement;
    close.click();
    expect(document.getElementById('imgModal').style.display).toEqual('none');
  });
  
  @Component({
    selector: 'host-component',
    template: '<app-carousel></app-carousel>'
  })
  class TestHostComponent {
    images: Image[] = [
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/yC-Yzbqy7PY",
        download_url: "https://picsum.photos/id//0/5616/3744",
        filename: "0.jpeg",
        format: "jpeg",
        height: 3744,
        id: 0,
        post_url: "https://unsplash.com/photos/yC-Yzbqy7PY",
        width: 5616
      },
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/LNRyGwIJr5c",
        download_url: "https://picsum.photos/id//1/5616/3744",
        filename: "1.jpeg",
        format: "jpeg",
        height: 3744,
        id: 1,
        post_url: "https://unsplash.com/photos/LNRyGwIJr5c",
        width: 5616
      }, 
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/N7XodRrbzS0",
        download_url: "https://picsum.photos/id//2/5616/3744",
        filename: "2.jpeg",
        format: "jpeg",
        height: 3744,
        id: 2,
        post_url: "https://unsplash.com/photos/N7XodRrbzS0",
        width: 5616
      }, 
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/jVb0mSn0LbE",
        download_url: "https://picsum.photos/id//21/3008/2008",
        filename: "21.jpeg",
        format: "jpeg",
        height: 2008,
        id: 21,
        post_url: "https://unsplash.com/photos/jVb0mSn0LbE",
        width: 3008
      }, 
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/du_OrQAA4r0",
        download_url: "https://picsum.photos/id//22/4434/3729",
        filename: "22.jpeg",
        format: "jpeg",
        height: 3729,
        id: 22,
        post_url: "https://unsplash.com/photos/du_OrQAA4r0",
        width: 4434
      },
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/8yqds_91OLw",
        download_url: "https://picsum.photos/id//23/3887/4899",
        filename: "23.jpeg",
        format: "jpeg",
        height: 4899,
        id: 23,
        post_url: "https://unsplash.com/photos/8yqds_91OLw",
        width: 3887
      }, 
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/cZhUxIQjILg",
        download_url: "https://picsum.photos/id//24/4855/1803",
        filename: "24.jpeg",
        format: "jpeg",
        height: 1803,
        id: 24,
        post_url: "https://unsplash.com/photos/cZhUxIQjILg",
        width: 4855
      },
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/Iuq0EL4EINY",
        download_url: "https://picsum.photos/id//25/5616/3744",
        filename: "25.jpeg",
        format: "jpeg",
        height: 3744,
        id: 25,
        post_url: "https://unsplash.com/photos/Iuq0EL4EINY",
        width: 5616
      },
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/Dl6jeyfihLk",
        download_url: "https://picsum.photos/id//3/5616/3744",
        filename: "3.jpeg",
        format: "jpeg",  
        height: 3744,
        id: 3,
        post_url: "https://unsplash.com/photos/Dl6jeyfihLk",
        width: 5616   
      },
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/LBI7cgq3pbM",
        download_url: "https://picsum.photos/id//33/5616/3744",
        filename: "33.jpeg",
        format: "jpeg",
        height: 3744,
        id: 33,
        post_url: "https://unsplash.com/photos/LBI7cgq3pbM",
        width: 5616
      },
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/y83Je1OC6Wc",
        download_url: "https://picsum.photos/id//4/5616/3744",
        filename: "4.jpeg",
        format: "jpeg",
        height: 3744,
        id: 4,
        post_url: "https://unsplash.com/photos/y83Je1OC6Wc",
        width: 5616
      },
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/LF8gK8-HGSg",
        download_url: "https://picsum.photos/id//5/5245/3497",
        filename: "5.jpeg",
        format: "jpeg",
        height: 3497,
        id: 5,
        post_url: "https://unsplash.com/photos/LF8gK8-HGSg",
        width: 5245
      },
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/tAKXap853rY",
        download_url: "https://picsum.photos/id//6/5616/3744",
        filename: "6.jpeg",
        format: "jpeg",
        height: 3744,
        id: 6,
        post_url: "https://unsplash.com/photos/tAKXap853rY",
        width: 5616
      }, 
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/BbQLHCpVUqA",
        download_url: "https://picsum.photos/id//7/4728/3168",
        filename: "7.jpeg",
        format: "jpeg",
        height: 3168,
        id: 7,
        post_url: "https://unsplash.com/photos/BbQLHCpVUqA",
        width: 4728
      },
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/xII7efH1G6o",
        download_url: "https://picsum.photos/id//8/5616/3744",
        filename: "8.jpeg",
        format: "jpeg",
        height: 3744,
        id: 8,
        post_url: "https://unsplash.com/photos/xII7efH1G6o",
        width: 5616
      },
      {
        author: "Alejandro Escamilla",
        author_url: "https://unsplash.com/photos/xII7efH1G6o",
        download_url: "https://picsum.photos/id//8/5616/3744",
        filename: "8.jpeg",
        format: "jpeg",
        height: 3744, 
        id: 8,
        post_url: "https://unsplash.com/photos/xII7efH1G6o",
        width: 5616
      }
    ]
    @ViewChild(CarouselComponent, { static: false }) carouselComponent: CarouselComponent
  }
});
