import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './components/app.component';
import {EscaperService} from './services/escaper.service';

bootstrap(AppComponent, [EscaperService]);
