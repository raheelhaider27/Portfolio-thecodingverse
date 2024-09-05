import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setupAudioListeners();
  }

  setupAudioListeners(): void {
    const audio = document.getElementById('welcomeSound') as HTMLAudioElement;

    // Start animation when audio starts playing
    audio.addEventListener('play', () => {
      this.startAnimation();
    });

    // Stop animation and navigate when audio ends
    audio.addEventListener('ended', () => {
      this.stopAnimation();
      this.navigateToNextPage();
    });

    // Play the audio
    audio.play();
  }

  startAnimation(): void {
    const animationWrapper = document.querySelector('.css_animation .wrapper');
    if (animationWrapper) {
      animationWrapper.classList.add('animate');
    }
  }

  stopAnimation(): void {
    const animationWrapper = document.querySelector('.css_animation .wrapper');
    if (animationWrapper) {
      animationWrapper.classList.remove('animate');
    }
  }

  navigateToNextPage(): void {
    this.router.navigate(['thecodingverse']);  // Replace with your desired route
  }
}