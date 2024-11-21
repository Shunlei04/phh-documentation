import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  private sections: { id: string; title: string }[] = [];

  constructor() {}

  setSections(sections: { id: string; title: string }[]): void {
    this.sections = sections;
  }

  getSections(): { id: string; title: string }[] {
    return this.sections;
  }
}
