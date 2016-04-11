import {Injectable} from 'angular2/core'

@Injectable()
export class EscaperService {

    generateColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    randomWidth() {
        return Math.random() * window.innerWidth;
    }

    randomHight() {
        return Math.random() * window.innerHeight;
    }
}
