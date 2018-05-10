
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCase'
})

export class TitleCasePipe implements PipeTransform{
    transform(value: string, args?: any){
        if(!value) return null;

        let words = value.split(' ');
        for(var i = 0; i < words.length; i++){
            if( i > 0 && this.isPreposition(words[i]))
                words[i] = words[i].toLowerCase();
            else
                words[i] = this.toTitleCase(words[i]);
        }

        return words.join(' ');
    }

    private toTitleCase(word): string{
        return word.substr(0,1).toUpperCase() + word.substr(1, word.length).toLowerCase();
    }
    
    private isPreposition(word: string): boolean{

        let  prepositions = ['with', 'at','from','into','during','including','until','against','among','throughout','despite','towards','upon',
        'concerning','of','to','in','for','on','by','about','like','through','over','before','between','after','since','without',
        'under','within','along','following','across','behind','beyond','plus','except','but','up','out','around','down','off',
        'above', 'near', 'the'];

        return prepositions.includes(word);
    }
}