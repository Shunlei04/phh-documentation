import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SectionService } from '../../../../../services/section/section.service';
import { ImageComponent } from '../../components/image/image.component';
import { LinkComponent } from '../../components/link/link.component';
import { MainTitleComponent } from '../../components/main-title/main-title.component';
import { OutlinesComponent } from '../../components/outlines/outlines.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';
import { ContentComponent } from '../../components/text-content/text-content.component';

@Component({
  selector: 'app-geting-started',
  templateUrl: './geting-started.component.html',
  styleUrl: './geting-started.component.scss',
  standalone: true,
  imports: [
    // components
    CommonModule,
    ContentComponent,
    ImageComponent,
    LinkComponent,
    MainTitleComponent,
    OutlinesComponent,
    SectionTitleComponent,
  ],
})
export class GetingStartedComponent implements OnInit {
  sections: { id: string; title: string }[] = [];
  isMobileView = false;

  @Output() sectionsLoaded = new EventEmitter<
    { id: string; title: string }[]
  >();

  constructor(
    private sectionService: SectionService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.sectionService.setSections([
      { id: 'step1', title: 'Step 1: How to download PHH Proxy App' },
      { id: 'step2', title: 'Step 2: How to install PHH Proxy App' },
      { id: 'step3', title: 'Step 3: Sending Request Token to Admin' },
      { id: 'step4', title: 'Step 4: Accepting Request From Admin Side' },
      { id: 'step5', title: 'Step 5: Using PHH Proxy App' },
    ]);

    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobileView = result.matches;
      });
  }

  ngOnInit(): void {
    console.log(this.sectionService.getSections());
    this.sections = this.sectionService.getSections();
  }
}
