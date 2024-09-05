import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CodingverseComponent } from './codingverse/codingverse.component';
import { VoiceComponent } from './voice/voice.component';
import { StudioComponent } from './studio/studio.component';

export const routes: Routes = [
    {
        path:'',component:CodingverseComponent
    },
    {
        path:'studio',
        component:StudioComponent
    },
]
