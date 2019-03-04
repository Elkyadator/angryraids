import { Component, HostBinding, Input } from '@angular/core';
import { Hero } from '../../modules/kings-raid/models/hero.model';

@Component({
  selector: 'app-hero-avatar',
  templateUrl: './hero-avatar.component.html',
  styleUrls: ['./hero-avatar.component.styl'],
})
export class HeroAvatarComponent {
  @Input()
  hero: Hero;
  @HostBinding('class.row')
  isRow = true;
  @HostBinding('class.no-gutters')
  isNoGutters = true;

  get heroImage() {
    return `/assets/images/hero/${this.hero.id}/image.webp`;
  }
  get heroInfo() {
    return `https://maskofgoblin.com/hero/${this.hero.id}`;
  }
}
