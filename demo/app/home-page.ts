import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HomeViewModel } from './home-view-model';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    let page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}
